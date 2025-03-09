import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-indigo-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const [showModal, setShowModal] = useState(false);
  const {
    poison,
    setPoison,
    muscles,
    setMuscle,
    goal,
    setGoal,
    updateWorkout,
  } = props;
  // let showModel = false;

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscle(muscleGroup) {
    console.log("Current muscle state:", muscles);
    console.log("Clicked muscleGroup:", muscleGroup);

    if (muscles.includes(muscleGroup)) {
      setMuscle(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscle([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscle([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <div className="min-h-screen">
      <SectionWrapper
        id={"generate"}
        header={"generate your workout"}
        title={["It's", "Huge", "o'clock"]}
      >
        <Header
          index={"01"}
          title={"Pick your poison"}
          description={"select your workout   you wish to endure"}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button
                onClick={() => {
                  setMuscle([]);
                  setPoison(type);
                }}
                className={
                  "bg-black border py-3 rounded-lg duration-200 hover:border-indigo-600 " +
                  (type === poison ? "border-indigo-600" : "border-indigo-400")
                }
                key={typeIndex}
              >
                <p className="capitalize">{type.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>

        <Header
          index={"02"}
          title={"Lock on targets"}
          description={"Select the muscles judged for annihilation"}
        />
        <div className="bg-black border border-solid border-indigo-400 rounded-lg flex flex-col">
          <button
            onClick={toggleModal}
            className="relative p-3 px-4 flex items-center justify-center"
          >
            <p className="capitalize">
              {muscles.length == 0
                ? "Select Muscle Group"
                : muscles.join("   ")}
            </p>
            <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
          </button>
          {showModal && (
            <div className="flex flex-col p-3">
              {(poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
              ).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    onClick={() => updateMuscle(muscleGroup)}
                    key={muscleGroupIndex}
                    className={
                      "hover:text-indigo-400 duration-200 " +
                      (muscles.includes(muscleGroup) ? "text-indigo-400" : "")
                    }
                  >
                    <p className="uppercase">{muscleGroup}</p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <Header
          index={"03"}
          title={"Become Juggernaut"}
          description={"select your ultimate objective"}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button
                onClick={() => setGoal(scheme)}
                className={
                  "bg-black border py-3 px-4 rounded-lg duration-200 hover:border-indigo-600 " +
                  (scheme === goal ? "border-indigo-600" : "border-indigo-400")
                }
                key={schemeIndex}
              >
                <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Button
            func={updateWorkout}
            text={"Formulate"}
            className="w-full lg:w-[20%] md:w-[20%] px-8 py-2 uppercase"
          />
        </div>
      </SectionWrapper>
    </div>
  );
}
