import React from "react";
import Carousel from "../Components/Carousel";
import Facts from "../Components/Facts";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Skills";
import Solutions from "../Components/Solutions";
import Specialization from "../Components/Specialization";
import TopBar from "../Components/TopBar";
import UseSoftware from "../Components/UseSoftware";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import Links from "../Components/Links";

function Home() {
  return (
    <>

      <Carousel />
      <Solutions />
      <Specialization />
      <Skills />
      <UseSoftware />
      <Facts />
      <Form />
    </>
  );
}

export default Home;
