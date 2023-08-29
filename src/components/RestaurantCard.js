export const RestaurantCard = (props) => {
  const { image, name, cuisine, rating, location } = props.restaurant;

  return (
    <div className="w-96  h-96 px-5 pb-10 shadow-lg rounded-lg mt-8">
      <img className="rounded-md" src={image} alt={name} />
      <div className="p-3 pb-3">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h2>
        <h3>{cuisine}</h3>
        <h4>{rating} stars</h4>
        <h1>{location}</h1>
      </div>
    </div>
  );
};
