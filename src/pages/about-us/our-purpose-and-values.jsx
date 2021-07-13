import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import OurValues from "../../containers/about-us/OurValues";
import Description from "../../containers/about-us/Description";
import OurOperationals from "../../containers/about-us/OurOperational";
import { MarketingPosition } from "./../../containers/homepage";

const OurPurposeAndValue = ({ data }) => {
  const { title, heroBackground, subtitle } = data.hero;
  return (
    <Layout inverted>
      <Hero title={title} slogan={subtitle} image={heroBackground} />
      <MarketingPosition data={data.contentfulHomeMarketPosition} />
      <Description />
      <OurValues />
      <OurOperationals />
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulHomeMarketPosition {
      title
      subtitle
      content {
        raw
      }
      features {
        items {
          content
          title
        }
      }
    }
    hero: contentfulOurPurposeAndValuesHero {
      title
      heroBackground {
        file {
          url
        }
      }
    }
  }
`;

export default OurPurposeAndValue;
