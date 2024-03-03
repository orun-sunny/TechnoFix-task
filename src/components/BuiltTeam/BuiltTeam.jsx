import { useState } from "react";
import img from "../../assets/Built/b1.png";
import { FaArrowRight } from "react-icons/fa";

import icon1 from "../../assets/icon/icon1.png";
import icon2 from "../../assets/icon/icon2.png";
import icon3 from "../../assets/icon/icon3.png";

const BuiltTeam = () => {
  const [tab, setTab] = useState("UX & Design");

  const team = [
    "UX & Design",
    "Marketing",
    "Product Management",
    "Engineering",
    "Consultants",
    "Agile Coaches",
    "Sale",
  ];

  const handleTabClick = (teamTab) => {
    setTab(teamTab);
  };

  return (
    <div className="py-3 px-24 overflow-hidden md:py-7 relative lg:py-0  lg:mt-10">
      <h1 className="text-3xl lg:text-[42px] font-bold text-[#050038] my-4">
        Built for all kinds of teams
      </h1>

      {/* tabs */}
      <div
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <ul className="flex flex-wrap lg:gap-6 mb-3 items-center">
          {team?.map((teamTab) => (
            <li
              onClick={() => handleTabClick(teamTab)}
              key={teamTab}
              className={`${
                tab === teamTab
                  ? " border rounded-full bg-slate-100 text-slate-600 px-3 py-2 font-medium "
                  : "px-3 py-2 font-medium"
              } text-[16px] cursor-pointer`}
            >
              {teamTab}
            </li>
          ))}
        </ul>
      </div>

      {tab === "UX & Design" && (
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="grid grid-cols-1  lg:grid-cols-5  mt-5 lg:mt-8"
        >
          <div className="col-span-2 order-2 lg:order-1 space-y-3 lg:mt-6">
            <ul className="flex flex-col text-slate-600 space-y-2">
              <li className="flex  items-center gap-3 text-[18px] ">
                <span>- </span>
                <p>Build low-fi wireframes</p>
              </li>
              <li className="flex  items-center gap-3 text-[18px] ">
                <span>- </span>
                <p>Involve stakeholders in the design process</p>
              </li>
              <li className="flex  items-center gap-3 text-[18px] ">
                <span>- </span>
                <p>Run engaging design workshops</p>
              </li>
            </ul>
            <button className="flex items-center gap-2 py-2  text-blue-600 ">
              Learn more <FaArrowRight className="text-[13px] mt-1" />{" "}
            </button>

            <div className="pt-10 lg:pt-20">
              <h4 className="text-slate-700">Integrate your favorite tools</h4>
              <div className="flex items-center gap-4 py-2">
                <img src={icon1} alt="icon" />
                <img
                  className="h- w-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBNsEAhkbNFiOpN9AcQwMBqUQF3GBhU_JrjXmNVGTOA&s"
                  alt=""
                />
                <img src={icon2} alt="icon" />
                <img src={icon3} alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-span-3 order-1 lg:order-2">
            <img className="w-full lg:h-[450px]" src={img} alt="built image" />
          </div>
        </div>
      )}

      {tab !== "UX & Design" && (
        <div className="h-[350px] flex items-center border-slate-700 justify-center w-full border text-white">
          <p className="text-2xl font-semibold">Not Available ..!</p>
        </div>
      )}
    </div>
  );
};

export default BuiltTeam;
