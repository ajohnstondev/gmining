import React from "react";

import Hero from "../../components/hero";
import Directory from "../../containers/corporate/directory";
import Layout from "../../components/layout";
const CorporateDirectory = () => {
  return (
    <Layout inverted>
      <Hero title="Corporate Directory" />
      <Directory />
    </Layout>
  );
};

export default CorporateDirectory;
