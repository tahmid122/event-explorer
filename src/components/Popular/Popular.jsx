import React, { use } from "react";
import PopularCard from "./PopularCard";
const Popular = ({ categoryData }) => {
  const categories = use(categoryData);
  return (
    <div className="my-12 w-11/12 mx-auto">
      <h1 className="text-center text-4xl font-bold mb-12">
        Popular Categories
      </h1>
      <div className="flex items-center justify-center flex-wrap text-center gap-6">
        {categories?.map((category) => (
          <PopularCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
