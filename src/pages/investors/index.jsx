import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Hero from "../../components/hero";
import SedarFillings from "../../containers/investors/sedarFilligns";
import AnnualReports from "../../containers/investors/annualReports";
import "./index.scss";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero;

  return (
    <Layout inverted>
      <Hero title={title} image={heroImage} />
      <SedarFillings data={data.documents.edges} />
      <AnnualReports data={data.reports.edges} />
    </Layout>
  );
};

export const query = graphql`
  query ReportsAndFilingsQuery {
    documents: allContentfulReportsFilingsDocuments(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          title
          type
          date
          link
          tags
        }
      }
    }
    hero: contentfulReportsFilingsHero {
      title
      heroImage {
        file {
          url
        }
      }
    }

    reports: allContentfulReportsFilingsReports(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          date
          title
          linkText
          linkUrl
        }
      }
    }
  }
`;

export default CorporateDirectory;
