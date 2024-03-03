import img1 from "../../assets/Brand/brand1.png";
import img2 from "../../assets/Brand/brand2.png";
import img3 from "../../assets/Brand/brand3.png";
import img4 from "../../assets/Brand/brand4png.png";
import img5 from "../../assets/Brand/brand5.png";

const Brand = () => {
  return (
    <div className="py-3 md:py-7 overflow-hidden lg:py-10">
      <h1 className="text-[18px] font-normal text-slate-500 text-center">
        Trusted by 45M+ users
      </h1>

      <div
        data-aos="flip-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center mt-4 gap-y- lg:gap-y-0 lg:mt-6"
      >
        <img className="mx-auto" src={img1} alt="brand-logo" />
        <img className="mx-auto" src={img2} alt="brand-logo" />
        <img className="mx-auto" src={img3} alt="brand-logo" />
        <img className="mx-auto" src={img4} alt="brand-logo" />
        <img className="mx-auto" src={img5} alt="brand-logo" />
      </div>
    </div>
  );
};

export default Brand;
