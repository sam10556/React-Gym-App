import React from "react";
import { Dumbbell } from "lucide-react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";
import { Link } from "react-router-dom";

const Popular = () => {
  const exerciseData = [
    {
      id: 1,
      trainerImg: "../images/jj1.png",
      name: "Warm up",
      duration: 15,
      sets: 3,
      calories: 100,
    },
    {
      id: 2,
      trainerImg: "../images/jj.avif",
      name: "Shoulder Workout",
      duration: 20,
      sets: 4,
      calories: 150,
    },
    {
      id: 3,
      trainerImg: "../images/yy1.jpg",
      name: "Yoga Session",
      duration: 55,
      sets: 5,
      calories: 250,
    },
    {
      id: 4,
      trainerImg: "../images/leg1.jpg",
      name: "Leg Workout",
      duration: 18,
      sets: 4,
      calories: 120,
    },
  ];
  return (
    <>
      <div className="w-full h-auto bg-black/10 flex flex-col items-center justify-center relative z-10 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-20 sm:px-6 px-4 overflow-hidden">
        {/* Inner Container */}
        <div className="w-full max-w-[90%] md:max-w-full flex flex-col items-center justify-center lg:py-12 md:py-10 sm:py-8 py-6 lg:px-20 md:px-16 sm:px-6 px-4">
          {/* Section Title */}
          <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
            <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
            Our Popular Exercise
          </h6>

          {/* Exercise Grid */}
          <div className="w-full h-auto flex items-center gap-x-5 gap-y-6 flex-wrap justify-center">
            {exerciseData.map((data) => (
              <div
                key={data.id}
                className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover:shadow hover:shadow-indigo-900 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={data.trainerImg}
                  alt="exercise img"
                  className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover rounded-lg"
                />
                <div className="w-full h-auto py-4 px-3 bg-indigo-950">
                  <h1 className="text-lg text-white font-semibold mb-1">
                    {data.name}
                  </h1>
                  <div className="w-full h-auto flex items-center gap-x-2">
                    <p className="text-sm text-gray-300">{data.duration}</p>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <p className="text-sm text-gray-300">{data.sets}</p>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <p className="text-sm text-gray-300">{data.calories}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 -z-10"></div>

          {/* Main Heading */}
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-gray-200 uppercase mb-4 text-center mt-5 leading-tight">
            SWEAT <span className="text-indigo-600">SMILE</span> REPEAT
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 font-medium mb-8 text-center px-4">
            Confused for your first workout or bored of your daily routine? Try
            this feature.
          </p>

          {/* Button */}
          <Link to="/generateWorkout">
            <SecondaryBtn className="px-8 py-3 uppercase rounded-full">
              Generate Your Workout
            </SecondaryBtn>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Popular;
