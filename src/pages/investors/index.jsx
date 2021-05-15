import React from "react";

import Layout from "../../components/layout";
import Hero from "../../components/hero";
import SedarFillings from "../../containers/investors/sedarFilligns";
import AnnualReports from "../../containers/investors/annualReports";
import "./index.scss";

const CorporateDirectory = () => {
  return (
    <Layout inverted>
      <Hero title="Reports &#38; Filings" />
      <SedarFillings />
      <AnnualReports />
    </Layout>
  );
};

export default CorporateDirectory;
