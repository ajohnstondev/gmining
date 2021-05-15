import React from "react";

import Hero from "../../components/hero";
import Events from "../../containers/eventsAndPresentation/events";
import Layout from "../../components/layout";

const CorporateDirectory = () => {
  return (
    <Layout inverted>
      <Hero title="Events &#38; Presentations" />
      <Events />
    </Layout>
  );
};

export default CorporateDirectory;
