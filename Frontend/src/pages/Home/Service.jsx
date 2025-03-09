import { Dumbbell, MoveRight } from "lucide-react";
import React from "react";
import TertiaryLink from "../../components/LinkBtn/TertiaryLink";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      serviceImg: "../images/fit1.jpg",
      title: "Fitness",
      desc: "Achieve your health goals with tailored workouts and expert guidance.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg: "../images/yoga1.jpg",
      title: "Yoga",
      desc: "Improve flexibility, balance, and mindfulness through guided yoga sessions.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg: "../images/gym2.jpg",
      title: "Gym",
      desc: "Access top-notch equipment and training programs to build strength and endurance.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg: "../images/ae1.jpg",
      title: "Aerobics",
      desc: "Boost your cardiovascular health with fun and energetic workout routines.",
      link: "#services",
    },
    {
      id: 5,
      serviceImg: "../images/box1.jpg",
      title: "Boxing",
      desc: "Enhance your agility, strength, and coordination with high-intensity boxing training.",
      link: "#services",
    },
    {
      id: 6,
      serviceImg: "../images/run1.jpg",
      title: "Running Club",
      desc: "Join our community of runners and improve your endurance, speed, and overall fitness.",
      link: "#services",
    },
    {
      id: 7,
      serviceImg: "../images/cal1.jpg",
      title: "Calisthenics",
      desc: "Master bodyweight exercises to build strength, flexibility, and control.",
      link: "#services",
    },
    {
      id: 8,
      serviceImg: "../images/swim1.jpg",
      title: "Swimming",
      desc: "Enhance your cardiovascular fitness and muscle tone with full-body aquatic workouts.",
      link: "#services",
    },
  ];
  return (
    <>
      <div
        id="services"
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-26 sm:px-6 px-4"
      >
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Our Services
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10 ">
          {serviceData.map((data) => (
            <div
              key={data.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:translate-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${data.serviceImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                  {data.title}
                </h1>
                <p className="text-base text-gray-400 font-normal text-center mb-4">
                  {data.desc}
                </p>
                <TertiaryLink link={data.link}>
                  Read More
                  <MoveRight className="w-4 h-4" />
                </TertiaryLink>
              </div>
            </div>
          ))}
        </div>
        <SecondaryLink
          link="/service"
          className="lg:w-[15%] md:w-[50%] sm:w-[75%] w-[85%] justify-center "
        >
          View All Services
          <MoveRight className="h-4 w-4" />
        </SecondaryLink>
      </div>
    </>
  );
};

export default Service;
