import Image from "next/image";

const Header = () => {
  return (
    <header className=" mb-[2.3rem]">
      <Image src="/Catwikilogo.svg" width={80} height={20} alt="logo" />
    </header>
  );
};

export default Header;
