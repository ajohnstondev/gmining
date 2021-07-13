import React, { useState } from "react";
import { graphql } from "gatsby";
import { saveAs } from "file-saver";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import BusinessModel from "../../containers/about-us/BusinessModel";
import GoldBox from "./../../components/goldbox";

const OurBusinessModel = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { heroImage, title, subtitle } = data.hero.nodes[0];

  const {
    // title,
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

  return (
    <Layout inverted>
      <Hero
        title={title}
        slogan={subtitle}
        image={heroImage}
        data={data.hero.nodes[0]}
      />
      <BusinessModel data={data.model.nodes[0]} />
      <GoldBox
        title={title}
        main={content}
        button={ctaButtonText}
        link={ctaButtonLink}
        file={downloadDocument.file}
        onDownloadClick={openThankModal}
        blue
      />
    </Layout>
  );
};

export const query = graphql`
  query OurBusinessModelQuery($locale: String) {
    hero: allContentfulOurBusinessModelHero(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        subtitle
        heroImage {
          file {
            url
          }
        }
      }
    }

    model: allContentfulOurBusinessModelBusinessModel(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        title
        description {
          raw
        }
        modelImage {
          file {
            url
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
  }
`;

export default OurBusinessModel;
