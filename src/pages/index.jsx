import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {
  Hero,
  Intro,
  MarketingPosition,
  CoperatePresentation,
  Article,
} from "./../containers/homepage";
const Home = ({ data }) => {
  return (
    <Layout>
      <Hero data={data.contentfulHomeHero} />
      <Intro data={data.contentfulHomeIntroduction} />
      <MarketingPosition data={data.contentfulHomeMarketPosition} />
      <CoperatePresentation data={data.contentfulHomeCorporatePresentation} />
      <Article quickLinks={data.contentfulHomeNewsRelease} />
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulHomeHero {
      title
      subtitle
      backgroundImage {
        file {
          fileName
          url
        }
      }
    }
    contentfulHomeIntroduction {
      title
      content {
        raw
      }
    }

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

    contentfulHomeCorporatePresentation {
      title
      content {
        raw
      }
      ctaButtonLink
      ctaButtonText
    }

    contentfulHomeNewsRelease {
      ctaLink
      ctaText
      title
      content
      quickLinks {
        items {
          link
          title
        }
      }
    }
  }
`;

export default Home;
