import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import GoldBox from "../components/goldbox";
import {
  Hero,
  Intro,
  MarketingPosition,
  Article,
} from "./../containers/homepage";

const Home = ({ data }) => {
  const {
    title,
    content,
    ctaButtonLink,
    ctaButtonText,
  } = data.presentation.nodes[0];

  return (
    <Layout>
      <Hero data={data.allContentfulHomeHero.nodes[0]} />
      <Intro
        data={data.allContentfulHomeIntroduction.nodes[0]}
        stockItem={data.allContentfulStockItem.nodes[0]}
      />
      <MarketingPosition data={data.allContentfulHomeMarketPosition.nodes[0]} />
      <GoldBox
        title={title}
        main={content}
        button={ctaButtonText}
        link={ctaButtonLink}
        blue
      />
      <Article
        quickLinks={data.allContentfulHomeNewsRelease.nodes[0]}
        news={data.news}
      />
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery($locale: String) {
    allContentfulHomeHero(filter: { node_locale: { eq: $locale } }) {
      nodes {
        title
        subtitle
        backgroundImage {
          file {
            fileName
            url
          }
        }
      }
    }
    allContentfulHomeIntroduction(filter: { node_locale: { eq: $locale } }) {
      nodes {
        title
        content {
          raw
        }
      }
    }
    allContentfulStockItem(filter: { node_locale: { eq: $locale } }) {
      nodes {
        spotGoldTitle
        spotGold
        stockChangeInPercent
        stockChangeInValue
        stockPriceTitle
        stockPrice
        ticker
        marketCap
        marketCapTitle
        GoldChangeInPercent
        goldChangeInValue
      }
    }

    allContentfulHomeMarketPosition(filter: { node_locale: { eq: $locale } }) {
      nodes {
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
    }

    presentation: allContentfulHomeCorporatePresentation(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        content {
          raw
        }
        ctaButtonLink
        ctaButtonText
      }
    }
    news: allContentfulNews(filter: { node_locale: { eq: $locale } }) {
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

    allContentfulHomeNewsRelease(filter: { node_locale: { eq: $locale } }) {
      nodes {
        ctaLink
        ctaText
        title
        content
        quickLinksTitle
        quickLinks {
          items {
            link
            title
          }
        }
      }
    }
  }
`;

export default Home;
