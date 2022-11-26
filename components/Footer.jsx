import catWikiLogo from "../assets/CatwikiLogo.svg";

const Footer = () => {
  return (
    <footer className="mt-[2.232rem] rounded-t-[4.2rem] bg-black py-[3.482rem] pl-[2.9rem] text-white outline">
      <img src={catWikiLogo} alt="" className="mb-[1.4rem] h-[1.9rem] contrast-[150%] invert" />
      <div className=" flex items-center gap-x-[0.7rem]">
        <span className="font-montserrat text-[2.4rem] font-normal leading-[2.9rem]">&#169;</span>
        <p className="font-montserrat text-[1.2rem] font-normal leading-[1.4rem]">
          created by{" "}
          <a href="https://github.com/presh-031" className="font-bold underline">
            presh-031
          </a>{" "}
          - devChallenge.io
        </p>
      </div>
    </footer>
  );
};

export default Footer;
