import React from "react";
import { Heart, HeartPulse, Soup } from "lucide-react";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);

  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative mt-6`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="_blank"
        className="relative h-36"
      >
        <img
          src={recipe.image}
          alt="recipe"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full cursor-pointer flex items-center gap-1  px-2">
          <Soup size={16} />{" "}
          <span className="text-[15px]"> {recipe.yield} Servings</span>
        </div>
        <div className=" object- absolute top-2 right-2 bg-white rounded-full cursor-pointer p-1">
          <Heart
            size={24}
            className="hover:fill-red-600 hover:text-red-600 transition-all"
          />
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
