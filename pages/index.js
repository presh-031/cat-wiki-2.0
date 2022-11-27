import Head from "next/head";

import Header from "../components/Header";
import MobileDropDown from "../components/MobileDropDown";
import Hero from "../components/Hero";
import Reason from "../components/Reason";
import Footer from "../components/Footer";

import { useDropDown } from "../stores/dropDown";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json(); //parse res as json

  return {
    props: {
      breeds: data,
    },
  };
};

export default function Home({ breeds }) {
  const [dropDown, dropDownActions] = useDropDown();

  const handleModalBgClick = (e) => {
    if (e.target === e.currentTarget) {
      dropDownActions.setDropDown();
    }
  };

  return (
    <div className="px-[1.8rem] pt-[2.343rem]">
      <Header />
      {dropDown.isShowing && (
        <div
          onClick={handleModalBgClick}
          className=" fixed  right-0  top-0 flex h-[100vh] w-[100vw] bg-opacity-20  bg-black "
        >
          <MobileDropDown breeds={breeds} />
        </div>
      )}
      <Hero />
      <Reason />
      <Footer />
    </div>
  );
}
