import React from "react";
import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
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
          Recommended Recipies
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular choices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-2">
          {/* recipe 1... */}
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
