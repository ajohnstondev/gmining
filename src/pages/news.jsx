import React from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import Blog from "../containers/news/blog";
import Layout from "../components/layout";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero;
  const { edges } = data.news;

  console.log("EDGES >>", edges);

  return (
    <Layout inverted>
      <Hero title={title} image={heroImage} />
      <Blog data={edges} />
    </Layout>
  );
};

export const query = graphql`
  query NewsQuery {
    hero: contentfulNewsPageHero {
      heroImage {
        file {
          url
        }
      }
      title
    }
    news: allContentfulNews(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          ctaText
          ctaLink
          title
          content {
            raw
          }
        }
      }
    }
  }
`;

export default CorporateDirectory;
