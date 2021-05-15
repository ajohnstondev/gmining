import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Article from "../containers/project/Article";

const CorporateDirectory = () => {
  return (
    <Layout inverted>
      <Hero title="Other projects" />
      <Article />
    </Layout>
  );
};

export default CorporateDirectory;
