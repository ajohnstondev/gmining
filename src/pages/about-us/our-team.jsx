import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Team from "../../containers/our-team/Team";
import GetInTouch from "../../containers/our-team/GetInTouch";

const OurTeam = ({ data }) => {
  const { title, heroImage, subtitle } = data.hero;

  return (
    <Layout inverted>
      <Hero title={title} slogan={subtitle} image={heroImage} />
      <Team data={data.team} members={data.members.edges} />
      <GetInTouch />
    </Layout>
  );
};

export const query = graphql`
  query OurTeamQuery {
    members: allContentfulTeamMember(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          name
          image {
            file {
              url
            }
          }
          position
          bio {
            bio
          }
          role
        }
      }
    }
    team: contentfulOurTeamManagementTeam {
      subheading
      heading
    }
    hero: contentfulOurTeamHero {
      title
      subtitle
      heroImage {
        file {
          url
        }
      }
    }
  }
`;

export default OurTeam;
