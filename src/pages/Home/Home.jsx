import React, { Suspense, useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router";
import Upcoming from "../../components/Upcoming/Upcoming";
import Popular from "../../components/Popular/Popular";
import Featured from "../../components/Featured/Featured";
const categoryData = fetch("/categories.json").then((result) => result.json());
const organizersData = fetch("/organizers.json").then((result) =>
  result.json()
);
const Home = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Slider data={data} />
      <Upcoming data={data} />
      <Suspense fallback={<p>loading...</p>}>
        <Popular categoryData={categoryData} />
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <Featured organizersData={organizersData} />
      </Suspense>
    </div>
  );
};

export default Home;
