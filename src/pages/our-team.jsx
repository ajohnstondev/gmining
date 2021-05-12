import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Team from "../containers/our-team/Team";
import GetInTouch from "../containers/our-team/GetInTouch";

const OurTeam = () => {
  return (
    <Layout inverted>
      <Hero title="Our Team" slogan="Lorem Ipsum dolor sit. amenta" />
      <Team />
      <GetInTouch />
    </Layout>
  );
};

export default OurTeam;
