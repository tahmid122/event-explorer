import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [event, setEvent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const expectedData = data.find((d) => d.id === id);
    setEvent(expectedData);
  }, [id, data]);
  const [reserved, setReserved] = useState(false);
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Reserved!",
      text: "Your Reservation Successful",
      icon: "success",
    });
    setReserved(true);
    e.target.name.value = "";
    e.target.email.value = "";
  };
  const handleFeedback = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Submitted!",
      text: "Your feedback submitted successfully.",
      icon: "success",
    });
    setFeedback(e.target.value);
    setIsSubmitted(true);
  };
  useEffect(() => {
    document.title = ` Event details of ${id}`;
  }, [id]);
  return (
    <>
      {event && (
        <div className="my-12 w-11/12 mx-auto p-3">
          <img
            className="w-full h-[200px] md:h-[550px] object-cover rounded-2xl"
            src={event.thumbnail}
            alt=""
          />
          <div className="mt-10 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold">{event.name}</h1>
            <h4 className="text-lg font-medium">
              Organizer: {event.organizer}
            </h4>
            <div>
              <h4 className="text-2xl font-semibold">
                Date, Fee and Location:
              </h4>
              <div className="mt-5 space-y-3">
                <span className="flex items-center gap-4 text-xl">
                  <FaCalendarAlt /> {event.date}
                </span>
                <span className="flex items-center gap-4 text-xl">
                  <FaLocationDot /> {event.location}
                </span>
                <span className="flex items-center gap-4 text-xl">
                  <FaDollarSign />
                  {event.entry_fee} TK
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-semibold">Details:</h4>
              <p className="text-base">{event.description}</p>
            </div>
            <div className="w-full md:w-6/12">
              <h4 className="text-2xl font-semibold">Feedback</h4>
              <form onSubmit={handleFeedback} className="w-full mt-3">
                <div className="flex items-center justify-between gap-2 lg:gap-6 lg:flex-row flex-col">
                  <textarea
                    className="w-full outline-none rounded border border-slate-200 py-3 px-5 min-h-[200px] resize-none"
                    type="text"
                    name="name"
                    defaultValue={feedback}
                    disabled={isSubmitted ? true : false}
                    placeholder="Leave a feedback about this event."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  disabled={isSubmitted ? true : false}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="w-full md:w-6/12">
              <h4 className="text-2xl font-semibold">Reserve a seat</h4>
              <form onSubmit={handleSubmit} className="w-full mt-3">
                <div className="flex items-center justify-between gap-2 lg:gap-6 lg:flex-row flex-col">
                  <input
                    className="w-full outline-none rounded border border-slate-200 py-3 px-5"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    className="w-full outline-none rounded border border-slate-200 py-3 px-5"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <p className="mt-3 text-lg font-semibold">
                  Entry Fee: {event.entry_fee}TK
                </p>
                <button
                  disabled={reserved ? true : false}
                  type="submit"
                  className="btn btn-primary w-full mt-3"
                >
                  {reserved ? "Reserved" : "Reserve Seat"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetails;
