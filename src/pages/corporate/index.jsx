import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import GoldBox from "../../components/goldbox";
import Documents from "../../containers/corporate/documents";

const Coporate = ({ data }) => {
  const { title, heroImage } = data.hero;
  const { title: title2, content } = data.commitment;
  return (
    <Layout inverted>
      <Hero title={title} image={heroImage} />
      <GoldBox title={title2} main={content} />
      <Documents data={data.docs} />
    </Layout>
  );
};

export const query = graphql`
  query CorporateGovernance {
    hero: contentfulCorporateGovernanceHero {
      title
      heroImage {
        file {
          url
        }
        title
      }
    }
    commitment: contentfulCorporateGovernanceOurCommitment {
      title
      content {
        raw
      }
    }
    docs: contentfulCorporateGovernanceReferenceDocumentsDocumentsJsonNode {
      items {
        title
        items {
          download_link
          type
          title
        }
      }
    }
  }
`;

export default Coporate;
