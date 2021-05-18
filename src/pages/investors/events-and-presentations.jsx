import React from "react";
import { graphql } from "gatsby";

import Hero from "../../components/hero";
import Events from "../../containers/eventsAndPresentation/events";
import Layout from "../../components/layout";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero;

  return (
    <Layout inverted>
      <Hero title={title} image={heroImage} />
      <Events data={data.events.edges} />
    </Layout>
  );
};

export const query = graphql`
  query EventsAndPresentationQuery {
    events: allContentfulEventsPresentationsEvents(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          title
          date
          linkTitle
          linkUrl
          image {
            file {
              url
            }
          }
        }
      }
    }
    hero: contentfulEventsPresentationsHero {
      title
      heroImage {
        file {
          url
        }
      }
    }
  }
`;

export default CorporateDirectory;
