import React from "react";
import EventCard from "./EventCard";
const Upcoming = ({ data }) => {
  return (
    <div className="my-12 w-11/12 mx-auto">
      <h1 className="text-center text-4xl font-bold mb-12">Upcoming Events</h1>
      <div className="grid grid-cols-12 gap-6">
        {data?.map((singleData) => (
          <EventCard key={singleData.id} data={singleData} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
