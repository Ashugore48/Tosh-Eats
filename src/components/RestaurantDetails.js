import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchRestaurantData from "../constants";
import { addItem } from "./cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [resList, setResList] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [quantities, setQuantities] = useState({});

  const dispatch = useDispatch();

  const handleAddCart = (menuItem, quantity) => {
    dispatch(addItem({ item: menuItem, quantity }));
  };

  const handleQuantityChange = (menuId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [menuId]: newQuantity,
    }));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const restaurantList = await fetchRestaurantData();
        setResList(restaurantList);

        const foundRestaurant = restaurantList.find(
          (res) => res.id === parseInt(id)
        );
        if (foundRestaurant) {
          setRestaurant(foundRestaurant);
        } else {
          console.log("Restaurant not found for id:", id);
        }
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {restaurant ? (
        <div className="flex px-16 py-16 flex-wrap mt-20">
          <div className="restaurant-details-container">
            <img
              className="rounded-md shadow-md"
              src={restaurant.image}
              alt="Restaurant Image"
            />
            <h1 className="text-4xl font-bold pt-2">{restaurant.name}</h1>
            <p className="text-xl font-medium">Cuisine: {restaurant.cuisine}</p>
            <p className="text-xl font-medium">
              Rating: {restaurant.rating} stars
            </p>
            <p className="text-xl font-medium">City: {restaurant.city}</p>
            <p className="text-xl font-medium">
              Location: {restaurant.location}
            </p>
          </div>
          <div className="flex flex-col pl-10 text-4xl font-bold">
            <h1>Menu : </h1>
            <ul className="flex flex-col text-xl font-normal pt-6">
              {restaurant.menu.map((menuItem) => (
                <li key={menuItem.menuId}>
                  <div className="pt-6 flex justify-between w-96">
                    <div className="menu-item-details font-semibold">
                      <p>Item: {menuItem.item}</p>
                      <p>Price: {menuItem.price}</p>
                      <p>ETA: {menuItem.ETA}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label>
                        Quantity :
                        <input
                          className="border-solid border-2 border-grey-900 w-16 rounded-md pl-2"
                          type="number"
                          value={quantities[menuItem.menuId] || 1} // Use the quantity from state or default to 1
                          min={1}
                          onChange={(e) =>
                            handleQuantityChange(
                              menuItem.menuId,
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </label>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-1 border border-blue-700 rounded"
                        onClick={() =>
                          handleAddCart(
                            menuItem,
                            quantities[menuItem.menuId] || 1
                          )
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-center text-5xl font-bold">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
