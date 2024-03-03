import { FaArrowRightLong } from "react-icons/fa6";
const Collaborate = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto my-20">
      <div className="relative">
        <h1 className="text-center text-[#050038] font-bold text-4xl md:text-5xl max-w-[550px] mx-auto">
          Collaborate without constraints
        </h1>
        <p className="bg-yellow-400 text-black absolute px-4 rounded-lg font-bold uppercase  right-0 md:right-40 -top-5 transform rotate-[12deg] text-sm">
          Your Idea Starts Here
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-10">
        <div className="space-y-5">
          <h1 className="text-[#050038] text-2xl font-bold">Free forever</h1>
          <p>
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our <br />
            <span className="text-[#4262FF]">pricing plans</span> for more
            features.
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-[#050038] text-2xl font-bold">
            Easy integrations
          </h1>
          <p>
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our{" "}
            <span className="text-[#4262FF]">Marketplace </span>.
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-[#050038] text-2xl font-bold">Security first</h1>
          <p>
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <span className="text-[#4262FF]">Trust Center</span> .
          </p>
        </div>
      </div>
      <p className="w-full flex justify-center items-center">
        <button className="text-white bg-[#4262FF] px-5 py-2 rounded-full">
          Sign up free <FaArrowRightLong className="inline" />
        </button>
      </p>
    </div>
  );
};

export default Collaborate;
