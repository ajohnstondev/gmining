import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Team from "../../containers/our-team/Team";
import GetInTouch from "../../containers/our-team/GetInTouch";

const OurTeam = ({ data }) => {
  const { title, heroImage, subtitle } = data.hero.nodes[0];

  return (
    <Layout inverted>
      <Hero title={title} slogan={subtitle} image={heroImage} />
      <Team data={data.team.nodes[0]} members={data.members.edges} />
      <GetInTouch />
    </Layout>
  );
};

export const query = graphql`
  query OurTeamQuery($locale: String) {
    members: allContentfulTeamMember(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: order }
    ) {
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
          isBoardOfDirectors
        }
      }
    }
    team: allContentfulOurTeamManagementTeam(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        subheading
        heading
      }
    }
    hero: allContentfulOurTeamHero(filter: { node_locale: { eq: $locale } }) {
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
  }
`;

export default OurTeam;
