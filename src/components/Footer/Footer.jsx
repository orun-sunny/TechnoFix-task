import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#02033B] text-white">
      <div className="px-6 md:px-14 lg:px-28 py-5 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-2xl font-semibold ">Scan. Detect. Remove.</h2>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <div className="bg-white rounded-md h-8 w-8 ">
                <FaTwitter className="text-[#02033B] text-xl mx-auto mt-[6px]" />
              </div>
              <div className="bg-white rounded-md h-8 w-8 ">
                <FaFacebookF className="text-[#02033B] text-xl mx-auto mt-[6px]" />
              </div>
              <div className="bg-white rounded-md h-8 w-8 ">
                <FaYoutube className="text-[#02033B] text-xl mx-auto mt-[6px]" />
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <h3 className="underline text-[15px]">Privacy Policy</h3>
              <h3 className="underline text-[15px]"> Terms of Service</h3>
            </div>
            <div className="space-y-2">
              <p>
                Copyright © 2022 Certo Software Limited | Registered in England
                & Wales No. 10072356
              </p>
              <p>Designed & developed by Bigger Picture</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-3xl  border-slate-400 py-4">Miro</h1>
            <div className="pt-4 lg:pt-6">
              <ul className="flex flex-col space-y-2 text-[#FFC247]">
                <li className="flex  items-center gap-3 text-[23px] font-semibold">
                  <span>- </span>
                  <p>iPhone</p>
                </li>
                <li className="flex items-center gap-3 text-[23px] font-semibold">
                  <span>- </span>
                  <p>Android</p>
                </li>
                <li className="flex items-center gap-3 text-[23px] font-semibold">
                  <span>- </span>
                  <p>Help</p>
                </li>
                <li className="flex items-center gap-3 text-[23px] font-semibold">
                  <span>- </span>
                  <p>About</p>
                </li>
                <li className="flex items-center gap-3 text-[23px] font-semibold">
                  <span>- </span>
                  <p>Insight</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#FFC247] rounded-3xl lg:h-52">
            <div className="p-5 space-y-3">
              <h2 className="text-2xl font-semibold text-slate-800">
                Sign Up to our Newsletter
              </h2>
              <p className="text-slate-800">
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>

              <div className="flex items-center py-4">
                <input
                  className="py-2 px-4 w-full outline-none rounded-l-full"
                  type="email"
                  placeholder="Email address"
                />
                <button className="px-5 py-2 font-semibold bg-[#02033B] text-white rounded-r-full">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="pt-10">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other <br /> countries. App Store is a
          service mark of Apple Inc. Android, Google Play <br /> and the Google
          Play logo are trademarks of Google LLC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
