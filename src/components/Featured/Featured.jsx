import React, { use } from "react";
import OrganizerCard from "./OrganizerCard";

const Featured = ({ organizersData }) => {
  const organizers = use(organizersData);
  return (
    <div className="my-12 w-11/12 mx-auto">
      <h1 className="text-center text-4xl font-bold mb-12">
        Featured Organizers
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {organizers?.map((organizer) => (
          <OrganizerCard key={organizer.id} organizer={organizer} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
