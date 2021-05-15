import React from "react";

import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Team from "../../containers/our-team/Team";
import GetInTouch from "../../containers/our-team/GetInTouch";
import { graphql } from "gatsby";

const OurTeam = ({ data }) => {
  const { title, heroImage, subtitle } = data.hero;

  return (
    <Layout inverted>
      <Hero title={title} slogan={subtitle} image={heroImage} />
      <Team data={data.team} />
      <GetInTouch />
    </Layout>
  );
};

export const query = graphql`
  query OurTeamQuery {
    team: contentfulOurTeamManagementTeam {
      subheading
      heading
      teamMembersList {
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
