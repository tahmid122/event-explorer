import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import ReviewsCard from "./ReviewsCard";

const MyReviews = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = "My Reviews";
  }, []);
  return (
    <div className="my-12 w-11/12 mx-auto p-3">
      <h1 className="text-center text-4xl font-bold mb-12">My Reviews</h1>
      <div className="grid grid-cols-12 gap-6">
        {data?.map((review) => (
          <ReviewsCard key={review.id} data={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
