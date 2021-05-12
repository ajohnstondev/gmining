import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import OurMission from "../containers/about-us/OurMission";
import OurStory from "../containers/about-us/OurStory";
import LegacyTimeline from "../containers/about-us/LegacyTimeline";
const AboutUs = () => {
  return (
    <Layout inverted>
      <Hero title="About Us" slogan="lorem ipsum dolor sit." />
      <LegacyTimeline />
      <OurMission />
      <OurStory />
    </Layout>
  );
};

export default AboutUs;
