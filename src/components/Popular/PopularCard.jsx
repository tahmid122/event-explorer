import React from "react";

const PopularCard = ({ category }) => {
  return (
    <div>
      <a
        href="/"
        className="border-2 border-slate-200 h-30 w-30 flex items-center flex-col justify-center p-5 rounded-full hover:bg-gray-100"
      >
        <div className="text-6xl">{category.icon}</div>
      </a>
      <p className="font-semibold text-base mt-5">{category.name}</p>
    </div>
  );
};

export default PopularCard;
