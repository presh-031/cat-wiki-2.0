import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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
            <Image src="/image 2.png" alt="" width="172" height="109" />
          </div>
          <div className="w-fit self-end   ">
            <Image src="/image 1.png" alt="" width="172" height="109" />
          </div>
        </div>
        <div className="flex justify-end">
          <Image src="/image 3.png" alt="" width="172" height="109" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
