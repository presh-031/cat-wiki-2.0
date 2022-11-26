import Head from "next/head";

import Header from "../components/Header";
import MobileDropDown from "../components/MobileDropDown";
import Hero from "../components/Hero";
import Reason from "../components/Reason";
import Footer from "../components/Footer";

import { useDropDown } from "../stores/dropDown";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/api");
  const data = await res.json(); //parse res as json

  return {
    props: {
      breeds: data,
    },
  };
};

export default function Home({ breeds }) {
  const dropDown = useDropDown();

  return (
    <div className="px-[1.8rem] pt-[2.343rem]">
      <Header />
      {/* {dropDown.isShowing && <MobileDropDown breeds={breeds} />} */}
      {/* <MobileDropDown breeds={breeds} /> */}
      <Hero />
      <Reason />
      <Footer />
    </div>
  );
}
