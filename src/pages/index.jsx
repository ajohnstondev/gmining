import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { saveAs } from "file-saver";
import Layout from "../components/layout";
import GoldBox from "../components/goldbox";
import Modal from "../components/Modal";
import {
  Hero,
  Intro,
  MarketingPosition,
  Article,
} from "../containers/homepage";
import { commaDelineation } from '../utils/functions';

const Home = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [stockItem, setStockItem] = useState(null);

  const {
    title,
    content,
    ctaButtonLink,
    ctaButtonText,
    downloadDocument,
  } = data.presentation.nodes[0];

  const openThankModal = async (file) => {
    if (typeof window != "undefined") {
      const downloadResult = await fetch(file.url);
      const blob = await downloadResult.blob();
      saveAs(blob, file.fileName);
    }
    setTimeout(() => {
      setModalOpen(true);      
    }, 1000);
  };

  useEffect(() => {
    async function fetchData() {
      const stock = await fetch(`${
        process.env.GATSBY_STOCK_TRACK_URL}&symbol=${
        process.env.GATSBY_STOCK_SYMBOL}&apikey=${
        process.env.GATSBY_STOCK_API_KEY}`, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(re=>re.json())
        .then(res => res["Global Quote"]);

      const spot = await fetch(process.env.GATSBY_GOLD_API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': process.env.GATSBY_GOLD_API_KEY
        },
      })
        .then(re=>re.json())
        .then(res => res["price"]);

      const {
        ticker,
        stockPriceTitle,
        marketCapTitle,
        spotGoldTitle
      } = data.allContentfulStockItem.nodes[0];

      setStockItem({
        ticker,
        stockPriceTitle,
        marketCapTitle,
        spotGoldTitle,
        stockPrice: Number(stock["05. price"]).toFixed(2),
        stockChangeInValue: Number(stock["09. change"]).toFixed(2),
        stockChangeInPercent: stock["10. change percent"],
        marketCap: commaDelineation(stock["06. volume"]),
        spotGold: commaDelineation(Number(spot).toFixed(2))
      });
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <Hero data={data.allContentfulHomeHero.nodes[0]} />
      <Intro
        data={data.allContentfulHomeIntroduction.nodes[0]}
        stockItem={stockItem}
      />
      <MarketingPosition data={data.allContentfulHomeMarketPosition.nodes[0]} />
      <GoldBox
        title={title}
        main={content}
        button={ctaButtonText}
        link={ctaButtonLink}
        file={downloadDocument.file}
        onDownloadClick={openThankModal}
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
        ticker
        marketCapTitle
        spotGoldTitle
        stockPriceTitle
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
        downloadDocument {
          file {
            url
            fileName
          }
        }
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
