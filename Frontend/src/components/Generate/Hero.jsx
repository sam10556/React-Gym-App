import React from "react";
import Button from "./Button";

export default function Hero({ onAccept }) {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-8">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
          <span className="text-indigo-800">NATTY</span> FIT
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        <strong>Get Strong. Stay Natty.</strong> This random workout generator
        creates customized routines to keep your training fresh and effective.
        No excuses—just smart workouts to push your limits.{" "}
        <strong>Let’s get Natty Fit!</strong> 💪🔥
      </p>
      <Button func={onAccept} text="Accept And Begin" />
    </div>
  );
}
