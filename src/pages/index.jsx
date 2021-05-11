import React from "react";
import Layout from "../components/layout";
import CoperatePresentation from "../containers/homepage/coperate-presentation";
import Hero from "../containers/homepage/hero";
import Intro from "../containers/homepage/intro";
import MarketingPosition from "../containers/homepage/market-position";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <MarketingPosition />
      <CoperatePresentation />
    </Layout>
  );
};

export default Home;
