import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import OurMission from "../../containers/about-us/OurMission";
import ExceptionalContent from "../../containers/investors/exceptional";

const InvestingWithUs = ({ data }) => {
  const { heroImage, title, subtitle } = data.hero.nodes[0];

  return (
    <Layout inverted>
      <Hero title={title} slogan={subtitle} image={heroImage} />
      <OurMission data={data.ourmission.nodes[0]} />
      <ExceptionalContent data={data.exceptional.nodes[0]} />
    </Layout>
  );
};

export const query = graphql`
  query InvestingWithUs($locale: String) {
    hero: allContentfulInvestingWithUsHero(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        heroImage {
          file {
            url
          }
        }
      }
    }
    ourmission: allContentfulInvestingWithUsOurMission(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
      }
    }
    exceptional: allContentfulInvestingWithUsContent(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
      }
    }
  }
`;

export default InvestingWithUs;
