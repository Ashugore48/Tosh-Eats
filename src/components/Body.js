import React, { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import fetchRestaurantData from "../constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const restaurantList = await fetchRestaurantData();
        setData(restaurantList);
        setFilteredData(restaurantList);
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    }

    fetchData();
  }, []);

  function filterData(searchText, cardsData) {
    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredData = cardsData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(lowerCaseSearchText)
    );
    return filteredData;
  }

  function filterByCuisine(cuisine) {
    if (cuisine === "All") {
      setFilteredData(data); // Show all restaurants
    } else {
      const filteredByCuisine = data.filter(
        (restaurant) =>
          restaurant.cuisine.toLowerCase() === cuisine.toLowerCase()
      );
      setFilteredData(filteredByCuisine);
    }
  }

  useEffect(() => {
    const updatedFilteredData = filterData(searchText, data);
    setFilteredData(updatedFilteredData);
  }, [searchText, data]);

  return (
    <div className="mt-20">
      <div className="flex justify-between px-5 shadow-lg h-12 items-center flex-wrap">
        <div className="flex gap-1 flex-wrap">
          <button
            key="All"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => filterByCuisine("All")}
          >
            All Cuisines
          </button>
          {data
            .map((restaurant) => restaurant.cuisine)
            .filter((cuisine, index, self) => self.indexOf(cuisine) === index)
            .map((cuisine) => (
              <button
                key={cuisine}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => filterByCuisine(cuisine)}
              >
                {cuisine}
              </button>
            ))}
        </div>
        <div className="search-container">
          <input
            className="block w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Restaurant.."
            value={searchText}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <h1 className="pl-20 pt-14 font-mono text-3xl text-gray-900 ">
        Restaurants Near you....
      </h1>
      <div className="flex flex-wrap justify-center gap-7 pb-10">
        {loading ? (
          // Loading screen
          <div className="flex justify-center h-screen">
            <p className="text-center text-5xl font-bold">Loading...</p>
          </div>
        ) : (
          // Content
          filteredData.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.id} key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
