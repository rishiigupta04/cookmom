import React from "react";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const fav = false;
  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

        {!fav && (
          <div>
            <p className="font-semibold text-md md:text-lg mt-24 text-wrap text-center text-gray-500 tracking-tight">
              No favorites yet.<br></br> Add some recipes to favorites.
            </p>
            <img
              src="/404.svg"
              alt=""
              className="mt-20 max-w-full md:max-w-sm mx-auto "
            />
          </div>
        )}

        {fav && (
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
