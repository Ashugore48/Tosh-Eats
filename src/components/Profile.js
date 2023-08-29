import React from "react";

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login"; 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        {currentUser ? (
          <div>
            <div className="mb-4">
              <p className="text-lg font-medium">Name: {currentUser.name}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-medium">Username: {currentUser.userName}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-medium">Email: {currentUser.email}</p>
            </div>
            <button
              className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-lg text-red-500">No user information found. Please log in.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
