import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import OurMission from "../../containers/about-us/OurMission";
import OurStory from "../../containers/about-us/OurStory";
import LegacyTimeline from "../../containers/about-us/LegacyTimeline";

const AboutUs = ({ data }) => {
  const { heroBackground, title, subtitle } = data.hero;

  return (
    <Layout inverted>
      <Hero title={title} slogan={subtitle} image={heroBackground} />
      <OurMission data={data.ourmission} />
      <OurStory data={data.ourstory} />
      <LegacyTimeline data={data.legacytimeline} />
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    hero: contentfulAboutUsHero {
      title
      subtitle
      heroBackground {
        file {
          url
        }
      }
    }
    legacytimeline: contentfulAboutUsOurLegacy {
      title
      timeline {
        items {
          content
          title
          year
        }
      }
      icons {
        file {
          url
        }
      }
      content {
        content
      }
    }
    ourmission: contentfulAboutUsOurMission {
      title
      content {
        raw
      }
    }
    ourstory: contentfulAboutUsOurStory {
      title
      content {
        raw
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

export default AboutUs;
