import { LuMoveRight } from "react-icons/lu";
import img from "../../assets/Testimonials/div.png";
import img2 from "../../assets/Testimonials/img2.png";
import img3 from "../../assets/Testimonials/div (1).png";
import user1 from "../../assets/Testimonials/user1.png";
import user2 from "../../assets/Testimonials/user2.png";
import user3 from "../../assets/Testimonials/user3.png";

const Testimonials = () => {
  return (
    <div className="py-3 px-24 md:py-7 overflow-hidden relative lg:py-10  lg:mt-10">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-center  text-[#050038] text-2xl md:text-3xl lg:text-5xl font-bold">
          Loved by the worlds best teams
        </h1>
        <div className="text-center pt-4 ">
          <button className=" font-medium  lg:gap-2 border border-[#4262FF] px-4 lg:px-5 py-2 text-[15px] lg:text-[17px] lg:py-[9px] rounded-full  text-blue-500 ">
            <div className="flex gap-1 items-center">
              See all customer stories
              <span>
                <LuMoveRight className="mt-[2px] " />
              </span>
            </div>
          </button>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-1 mt-4 md:mt-6 lg:mt-7 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-6 items-center"
      >
        <div className="border p-4 lg:h-[322px]">
          <img className="w-[180px]" src={img} alt="logo" />
          <p className="text-slate-600 pt-3 lg:pt-4">
            “When the pandemic hit, those of us who thrive on in-person
            collaboration were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaboration, white boarding, and retrospectives while remote.”
          </p>

          <div className="mt-4 lg:mt-10 flex gap-2 items-center">
            <img src={user1} className="border rounded-full" alt="user" />
            <div className="space-y-">
              <h2 className="font-medium text-[18px] text-slate-600">
                Roxanne Mustafa
              </h2>
              <p className=" text-[16px] text-slate-600">
                Design Team Lead at VMware
              </p>
            </div>
          </div>
        </div>

        <div className="border p-4 lg:h-[322px]">
          <img className="w-[180px]" src={img2} alt="logo" />
          <p className="text-slate-600 pt-3 lg:pt-4">
            “Miro helps solve one of the major gaps in product design: how to
            manage tasks across product designers whose projects are in
            different tools.”
          </p>

          <div className="mt-4 lg:mt-24 flex gap-2 items-center">
            <img src={user2} className="border rounded-full" alt="user" />
            <div className="">
              <h2 className="font-medium text-[18px] text-slate-600">
                Jane Ashley
              </h2>
              <p className=" text-[16px] text-slate-600">
                Head of Design at DocuSign
              </p>
            </div>
          </div>
        </div>

        <div className="border p-4 lg:h-[322px]">
          <img className="w-[180px]" src={img3} alt="logo" />
          <p className="text-slate-600 pt-3 lg:pt-4">
            “As we used Miro we moved from skepticism to belief to innovation,
            and now we have a tool that’s at the core of what we do and will
            continue to extend into the future.”
          </p>

          <div className="mt-4 lg:mt-[77px] flex gap-2 items-center">
            <img src={user3} className="border rounded-full" alt="user" />
            <div className="space-y-">
              <h2 className="font-medium text-[18px] text-slate-600">
                Laura Baird
              </h2>
              <p className=" text-[16px] text-slate-600">
                Associate Design Director at frog
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
