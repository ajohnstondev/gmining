import React from "react";
import { graphql } from "gatsby";

import Hero from "../../components/hero";
import Directory from "../../containers/corporate/directory";
import Layout from "../../components/layout";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero;

  return (
    <Layout inverted>
      <Hero title={title} image={heroImage} />
      <Directory data={data.offices.edges} />
    </Layout>
  );
};

export const query = graphql`
  query CorporateDirectory {
    hero: contentfulCorporateDirectoryHero {
      heroImage {
        file {
          url
        }
      }
      title
    }
    offices: allContentfulCorporateDirectoryOffices(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          address {
            raw
          }
          name
          subtitle
          email
          phone
          phone2
          websiteUrl
        }
      }
    }
  }
`;

export default CorporateDirectory;
