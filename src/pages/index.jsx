import React from "react";
import Layout from "../components/layout";
import Footer from "./../components/footer/index";
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
      <Footer />
    </Layout>
  );
};

export default Home;
