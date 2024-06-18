import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";

const APP_ID = "a1deccca";
const APP_KEY = "cfc3354e447c3bda368e3415a2e35467";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className=" max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={24} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1 className=" font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular choices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-2">
          {!loading &&
            recipes.map(({ recipe }, index) => {
              return (
                <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
              );
            })}

          {loading &&
            // This code generates a list of 9 skeleton loaders for recipe cards while the data is being fetched.
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                {/* This div represents the image of the recipe card. The skeleton loader has a fixed height and width, and it takes up the full width of the card. */}
                <div className="skeleton h-32 w-full"></div>
                {/* This div represents the title and servings of the recipe card. The skeleton loader for the title has a fixed height and width, and for the servings it's a little smaller. */}
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                {/* This div represents the description of the recipe card. The skeleton loader takes up half the width of the card. */}
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
