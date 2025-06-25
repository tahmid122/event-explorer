import React from "react";
import { Link } from "react-router";

const EventCard = ({ data }) => {
  return (
    <>
      {data && (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="h-[250px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={data.thumbnail}
              alt=""
            />
          </div>
          <div className="p-5 relative space-y-2">
            <span className="text-sm border border-slate-300 py-1 rounded-full px-2 absolute right-4 -top-4 bg-white font-bold shadow-sm w-[100px] text-center">
              {data.category}
            </span>
            <h4 className="text-lg font-semibold">{data.name} </h4>
            <p className="text-base text-gray-500">Venue: {data.location}</p>
            <p className="text-base text-gray-500">
              Organizer: {data.organizer}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-base font-medium">Date: {data.date}</span>
              <span className="text-base font-medium">
                Fee: {data.entry_fee}tk
              </span>
            </div>
            <Link to={`/events/${data.id}`} className="btn btn-primary w-full">
              View More
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
