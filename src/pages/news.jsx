import React from "react";

import Hero from "../components/hero";
import Blog from "../containers/news/blog";
import Layout from "../components/layout";
const CorporateDirectory = () => {
  return (
    <Layout inverted>
      <Hero title="News Releases" />
      <Blog />
    </Layout>
  );
};

export default CorporateDirectory;
