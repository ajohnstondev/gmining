import React from "react";
import Layout from "../components/layout";
import {
  Hero,
  Intro,
  MarketingPosition,
  CoperatePresentation,
  Article,
} from "./../containers/homepage";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <MarketingPosition />
      <CoperatePresentation />
      <Article />
    </Layout>
  );
};

export default Home;
