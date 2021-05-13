import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import GoldBox from "../../components/goldbox";
import Documents from "../../containers/corporate/documents";

const Coporate = () => {
  return (
    <Layout inverted>
      <Hero title="Corporate Governance" />
      <GoldBox
        title="Our Commitment"
        main="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus placeat nam adipisci cupiditate quas a repudiandae obcaecati id pariatur quam culpa, eos officia ipsum tempore laborum."
      />
      <Documents />
    </Layout>
  );
};

export default Coporate;
