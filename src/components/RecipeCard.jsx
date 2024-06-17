import React from "react";
import { Heart, HeartPulse, Soup } from "lucide-react";

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative mt-6">
      <a href="#" className="relative h-32">
        <img
          src="/1.jpg"
          alt="recipe"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full cursor-pointer flex items-center gap-1  px-2">
          <Soup size={16} /> <span className="text-[15px]">4 Servings</span>
        </div>
        <div className="absolute top-2 right-2 bg-white rounded-full cursor-pointer p-1">
          <Heart
            size={24}
            className="hover:fill-red-600 hover:text-red-600 transition-all"
          />
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">Roasted Chicken</p>
      </div>
      <p className="my-2"> Turkish Kitchen</p>
      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 bg-[#d6f497] items-center rounded-md p-1">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
        <div className="flex gap-1 bg-[#d6f497] items-center rounded-md p-[5px]">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Heart-Healthy
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
