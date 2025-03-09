import React from "react";
import { CheckSquare, Dumbbell } from "lucide-react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Pricing = () => {
  return (
    <>
      <div
        id="plan"
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-26 sm:px-6 px-4 lg:my-[15vh]"
      >
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Our Pricing Plan
        </h6>
        <div className="w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap">
          {/* Basic Plan */}
          <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-indigo-600 hover:bg-gray-600/10 ease-out duration-700 cursor-pointer">
            <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              Basic Plan
            </h2>
            <h1 className="text-5xl text-indigo-600 font-bold mb-3 tracking-wide">
              ₹2999{" "}
              <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                / Month
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Get Access To All Gym Classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  5 Yoga Classes Per Month
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Locker Access
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Track Workout Facility
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Select Plan
            </PrimaryBtn>
          </div>
          {/* Premium Plan */}
          <div className="lg:w-[32%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-indigo-600/10 rounded-lg border-[6px] border-indigo-600 ease-out duration-700 cursor-pointer relative">
            <div className="absolute -top-6 left-[50%] translate-x-[-50%] bg-indigo-600 py-2 px-5 rounded-full text-base font-medium text-white">
              Recommended
            </div>
            <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              Premium Plan
            </h2>
            <h1 className="text-5xl text-indigo-600 font-bold mb-3 tracking-wide">
              ₹5000{" "}
              <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                / Month
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Get Access To All Gym Classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Unlimited Yoga Classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Personal Trainer Sessions
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Locker & Shower Access
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Track Workout Facility
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Limited Spa & Massage Access
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Select Plan
            </PrimaryBtn>
          </div>
          {/* Vip Plan */}
          <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-indigo-600 hover:bg-gray-600/10 ease-out duration-700 cursor-pointer">
            <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              VIP Plan
            </h2>
            <h1 className="text-5xl text-indigo-600 font-bold mb-3 tracking-wide">
              ₹10000{" "}
              <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                / Month
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Get Access To All Gym Classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Unlimited Yoga Classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Unlimited Spa & Massage Access
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Locker & Shower Access
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Advance Track Workout Facility
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Select Plan
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
