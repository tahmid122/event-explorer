import React from "react";
import { Link } from "react-router";

const Privacy = () => {
  return (
    <div className="w-11/12 mx-auto p-3 min-h-[calc(100vh-70px)] flex items-center justify-center flex-col">
      <h3 className="text-2xl font-bold">This page is under development.</h3>
      <div className="mt-10">
        <Link
          to={"/"}
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default Privacy;
