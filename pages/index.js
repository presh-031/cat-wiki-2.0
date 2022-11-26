import Head from "next/head";

import Header from "../components/Header";
import MobileDropDown from "../components/MobileDropDown";
import Hero from "../components/Hero";
import Reason from "../components/Reason";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="px-[1.8rem] pt-[2.343rem]">
      <Header />
      {dropDown.isShowing && <MobileDropDown breeds={data} />}
      <Hero />
      <Reason />
      <Footer />
    </div>
  );
}
