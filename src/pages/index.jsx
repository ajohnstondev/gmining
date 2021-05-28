import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import GoldBox from "../components/goldbox";
import {
  Hero,
  Intro,
  MarketingPosition,
  Article,
} from "./../containers/homepage";
import Modal from "../components/Modal";

const Home = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    title,
    content,
    ctaButtonLink,
    ctaButtonText,
    downloadDocument,
  } = data.presentation.nodes[0];

  const openThankModal = async (file) => {
    if (typeof window != "undefined") {
      fetch(file.url, {
        method: "GET",
        headers: {
          "Content-Type": "application/octet-stream",
        },
      })
        .then((response) => response.blob())
        .then((blob) => {
          // Create blob link to download
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${file.fileName}`);

          // Append to html link element page
          document.body.appendChild(link);

          // Start download
          link.click();

          // Clean up and remove the link
          link.parentNode.removeChild(link);
        });
    }
    // setModalOpen(true);
  };

  return (
    <Layout>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
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
