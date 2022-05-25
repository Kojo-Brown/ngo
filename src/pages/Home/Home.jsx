import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blog/Blog";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import MiniSection from "../../components/MiniSection/MiniSection";
import Statistics from "../../components/Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Features />
      <Statistics />
      <Blog />
      <MiniSection />
      <Footer />
    </div>
  );
};

export default Home;
