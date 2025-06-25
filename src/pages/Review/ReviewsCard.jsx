import React from "react";
import { Link } from "react-router";

const ReviewsCard = ({ data }) => {
  return (
    <div className="col-span-12 overflow-hidden rounded-lg shadow-lg flex lg:flex-row flex-col items-start border border-slate-200 w-full">
      <div className="h-[300px] w-full lg:w-[40%] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={data.thumbnail}
          alt=""
        />
      </div>
      <div className="p-5 relative space-y-3 w-full lg:w-[60%]">
        <Link to={`/events/${data.id}`}>
          <h4 className="text-lg font-semibold mb-3 hover:text-primary">
            {data.name}{" "}
          </h4>
        </Link>

        <p className="text-base text-gray-500">
          Your Comment:{" "}
          <span className="italic text-sm">"{data.description}"</span>
        </p>
        <div className="flex items-center flex-wrap gap-2 justify-between">
          <span className="text-base font-medium">
            Review Date: {data.date}
          </span>
          <p className="text-base text-gray-500">
            Your Rating: {data.rating}⭐⭐⭐⭐
          </p>
        </div>
        <button className="btn btn-primary">Edit Review</button>
      </div>
    </div>
  );
};

export default ReviewsCard;
