import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-[55vh] bg-center sm:bg-top flex items-center justify-center flex-col relative z-10 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-26 sm:px-6 px-4"
        style={{
          backgroundImage: "url(../images/gym3.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">
          No <span className="text-indigo-600">Pain</span>, No{" "}
          <span className="text-indigo-600">Gain</span>
        </h1>
        <p className="text-lg text-gray-300 font-medium mb-8 text-center">
          Ignite Your Fitness Journey with Premium Solutions.
        </p>
        <PrimaryBtn className="px-10 py-3 uppercase rounded-full">
          Become a Member
        </PrimaryBtn>
      </div>
    </>
  );
};

export default Banner;
