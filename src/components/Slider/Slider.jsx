import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router";
const Slider = ({ data }) => {
  return (
    <div className="h-[calc(100vh-89px)] bg-white flex items-center justify-center w-11/12 mx-auto">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {data?.slice(0, 3).map((singleData) => (
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-11/12 mx-auto gap-6 lg:gap-10">
              <div className="space-y-3 lg:space-y-6 lg:w-5/12 ">
                <h1 className="font-bold text-3xl lg:text-5xl lg:leading-14">
                  {singleData.name}
                </h1>
                <p className="text-base">
                  {singleData.description.slice(0, 120)}...
                </p>
                <Link
                  to={`/events/${singleData.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
              <div className="lg:w-6/12 w-full">
                <img
                  className="w-full rounded-xl lg:rounded-2xl h-[250px]  sm:h-[450px] object-cover"
                  src={singleData.thumbnail}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
