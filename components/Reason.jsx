import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
const Reason = () => {
  return (
    <div className="mt-[6.372rem]  ">
      <div className="mb-[6.372rem] ">
        <div className="mn-[1.624rem] w-[5rem] rounded-[7.7rem] border-b-[3px] border-[#4D270C]"></div>
        <p className="mb-[4.284rem] w-[32.5rem] font-montserrat text-[4rem] font-bold leading-[4.876rem] text-[#291507]">
          Why should you have a cat?
        </p>
        <p className="mb-[2.685rem] font-montserrat text-[1.80rem] font-medium leading-[2.194rem] text-[#291507]">
          Having a cat around you can actually trigger the release of calming chemicals in your body which lower your
          stress and anxiety levels.
        </p>
        <a
          href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[1rem] font-montserrat text-[1.2rem] font-bold leading-[1.90rem] text-[#291507]  opacity-60 "
        >
          READ MORE <HiOutlineArrowNarrowRight />
        </a>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-[1.798rem] ">
          <div>
            <img src={image2} alt="" className="h-[10.90rem] w-[17.2rem]" />
          </div>
          <div className="w-fit self-end   ">
            <img src={image1} alt="" className="h-[18.443rem] w-[12.295rem]" />
          </div>
        </div>
        <div className="flex justify-end">
          <img src={image3} alt="" className="h-[24.96rem] w-[14.998rem]" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
