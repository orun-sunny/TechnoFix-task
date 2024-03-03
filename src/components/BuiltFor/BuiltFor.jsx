import { useState } from "react";

import img from "../../assets/Built/b2.png";
import { FaArrowRight } from "react-icons/fa";

const BuiltFor = () => {
  const [tab, setTab] = useState("Brainstorming");

  const work = [
    "Brainstorming",
    "Diagramming",
    "Meetings & Workshops",
    "Scrum Events",
    "Mapping",
    "Research Design",
    "Strategic Planning",
  ];

  const handleTabClick = (workTab) => {
    setTab(workTab);
  };

  return (
    <div className="py-3 px-24 md:py-7 overflow-hidden relative lg:py-10  lg:mt-10">
      <h1 className="text-3xl lg:text-[42px] font-bold text-[#050038] my-4">
        Built for the way you work
      </h1>
      {/* tabs */}
      <div
        data-aos="flip-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <ul className="flex flex-wrap lg:gap-6 mb-3 items-center">
          {work?.map((workTab) => (
            <li
              onClick={() => handleTabClick(workTab)}
              key={workTab}
              className={`${
                tab === workTab
                  ? " border rounded-full bg-slate-100 text-slate-600 px-3 py-2 font-medium "
                  : "px-3 py-2 font-medium"
              } text-[16px] cursor-pointer`}
            >
              {workTab}
            </li>
          ))}
        </ul>
      </div>

      {tab === "Brainstorming" && (
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="grid grid-cols-1 items-centr lg:grid-cols-5  mt-5 lg:mt-8"
        >
          <div className="col-span-2 order-2 lg:order-1 space-y-3 lg:mt-12">
            <h3 className="text-[19px] text-slate-700 font-medium">
              Brainstorming
            </h3>
            <p className="text-[16px] text-slate-700">
              Unleash creative ideas and build on them with the help <br /> of
              sticky notes, images, mind maps, videos, drawing <br />{" "}
              capabilities — the list goes on.
            </p>
            <button className="flex items-center gap-2 py-2  text-blue-600 ">
              Learn more <FaArrowRight className="text-[13px] mt-1" />{" "}
            </button>
          </div>
          <div className="col-span-3 order-1 lg:order-2">
            <img className="w-full lg:h-[480px]" src={img} alt="built image" />
          </div>
        </div>
      )}

      {tab !== "Brainstorming" && (
        <div className="h-[350px] flex items-center border-slate-700 justify-center w-full border ">
          <p className="text-2xl font-semibold">No Content Uploaded Yet ..!</p>
        </div>
      )}
    </div>
  );
};

export default BuiltFor;
