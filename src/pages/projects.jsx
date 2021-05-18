import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Article from "../containers/project/Article";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero;
  return (
    <Layout inverted>
      <Hero title={title} image={heroImage} />
      <Article data={data.article} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery {
    hero: contentfulProjectsHero {
      title
      heroImage {
        file {
          url
        }
      }
    }
    article: contentfulProjectsContent {
      bottomText {
        raw
      }
      content {
        raw
      }
      heading
      image {
        file {
          url
        }
      }
    }
  }
`;

export default CorporateDirectory;
