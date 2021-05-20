import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import GoldBox from "../components/goldbox";
import {
  Hero,
  Intro,
  MarketingPosition,
  CoperatePresentation,
  Article,
} from "./../containers/homepage";

const Home = ({ data }) => {
  const { title, content, ctaButtonLink, ctaButtonText } = data.presentation;
  return (
    <Layout>
      <Hero data={data.contentfulHomeHero} />
      <Intro
        data={data.contentfulHomeIntroduction}
        stockItem={data.contentfulStockItem}
      />
      <MarketingPosition data={data.contentfulHomeMarketPosition} />
      <GoldBox
        title={title}
        main={content}
        button={ctaButtonText}
        link={ctaButtonLink}
        blue
      />
      <Article quickLinks={data.contentfulHomeNewsRelease} news={data.news} />
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
    contentfulStockItem {
      spotGold
      stockChangeInPercent
      stockChangeInValue
      stockPrice
      ticker
      marketCap
      GoldChangeInPercent
      goldChangeInValue
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

    presentation: contentfulHomeCorporatePresentation {
      title
      content {
        raw
      }
      ctaButtonLink
      ctaButtonText
    }
    news: allContentfulNews(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          ctaText
          ctaLink
          title
          date(formatString: "MMMM Do,YYYY")
          content {
            raw
          }
        }
      }
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
