import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Hero from "../../components/hero";
import SedarFillings from "../../containers/investors/sedarFilligns";
import AnnualReports from "../../containers/investors/annualReports";
import "./index.scss";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero.nodes[0];

  return (
    <Layout inverted>
      <Hero title={title} image={heroImage} />
      <SedarFillings data={data.documents.edges} />
      <AnnualReports data={data.reports.edges} />
    </Layout>
  );
};

export const query = graphql`
  query ReportsAndFilingsQuery($locale: String) {
    documents: allContentfulReportsDisclosuresDocuments(
      filter: { node_locale: { eq: $locale } }
    ) {
      edges {
        node {
          title
          type

          date(formatString: "MMM DD, YYYY")
          link
          tags
        }
      }
    }
    hero: allContentfulReportsDisclosuresHero(
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

    reports: allContentfulReportsDisclosuresReports(
      filter: { node_locale: { eq: $locale } }
    ) {
      edges {
        node {
          date(formatString: "MMM DD, YYYY")
          title
          linkText
          linkUrl
        }
      }
    }
  }
`;

export default CorporateDirectory;
