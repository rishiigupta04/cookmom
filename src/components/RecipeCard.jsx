import React, { useState } from "react";
import { Heart, HeartPulse, Soup } from "lucide-react";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );

  // Function to add or remove a recipe from the favorites list in localStorage.
  const addRecipeToFavorites = () => {
    // Retrieve the list of favorites from localStorage, or initialize it to an empty array if it doesn't exist.
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Find the index of the recipe in the favorites list.
    const index = favorites.findIndex((fav) => fav.label === recipe.label);

    // Create a copy of the favorites list.
    const newFavorites = [...favorites];

    // If the recipe is already in the favorites list, remove it.
    if (index !== -1) {
      newFavorites.splice(index, 1);
      setIsFavorite(false);
    }
    // Otherwise, add the recipe to the favorites list.
    else {
      newFavorites.push(recipe);
      setIsFavorite(true);
    }

    // Update the favorites list in localStorage with the new list.
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative mt-6`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="_blank"
        className="relative h-36"
      >
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt="recipe"
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />

        <div className="absolute bottom-2 left-2 bg-white rounded-full cursor-pointer flex items-center gap-1  px-2">
          <Soup size={16} />{" "}
          <span className="text-[15px]"> {recipe.yield} Servings</span>
        </div>
        <div
          className=" object- absolute top-2 right-2 bg-white rounded-full cursor-pointer p-1"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
          }}
        >
          {!isFavorite && (
            <Heart
              size={20}
              className="hover:fill-red-500 hover:text-red-500"
            />
          )}
          {isFavorite && (
            <Heart size={20} className="fill-red-500 text-red-500" />
          )}
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}{" "}
        Kitchen
      </p>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, index) => (
          <div
            key={index}
            className={`flex gap-1 ${badge} items-center rounded-md p-1`}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
