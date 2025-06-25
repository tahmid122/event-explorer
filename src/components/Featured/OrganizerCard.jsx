import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const OrganizerCard = ({ organizer }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="p-5  rounded-md shadow-md border border-slate-200 flex items-center justify-center flex-col gap-4 w-full md:w-[300px] h-[300px]"
      data-aos="flip-right"
      data-aos-duration="2000"
    >
      <div className="w-20 h-20 flex items-center justify-center">
        <img className="w-full " src={organizer.logo} alt="" />
      </div>
      <div className="flex flex-col justify-between gap-3">
        <h3 className="font-semibold text-lg text-center">{organizer.name}</h3>
        <div className="flex items-center justify-between text-sm gap-3">
          <span className="border border-slate-200 rounded-full px-2 py-1 shadow-sm">
            Rating: {organizer.rating}⭐
          </span>
          <a
            className="border border-slate-200 rounded-full px-2 py-1 shadow-sm"
            href={organizer.website}
            target="_blank"
          >
            Website
          </a>
        </div>
        <div className="text-base text-center text-gray-600">
          <span>{organizer.total_followers} Followers </span>|
          <span> {organizer.total_events} Events</span>
        </div>
        <button className="btn btn-primary w-full">Follow</button>
      </div>
    </div>
  );
};

export default OrganizerCard;
