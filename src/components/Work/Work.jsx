import img from "../../assets/work/work.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Work = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="flex-1 space-y-5 ">
        <h1 className="text-4xl text-[#050038] font-bold">
          Work together,
          <br /> wherever you work
        </h1>
        <p className="max-w-[400px]">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <button className="text-blue-600 underline">
          Learn more <FaArrowRightLong className="inline pl-2 text-2xl" />
        </button>
      </div>
      <div className="flex-1">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Work;
