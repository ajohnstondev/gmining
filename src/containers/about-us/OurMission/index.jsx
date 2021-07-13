import React from "react";

import GoldBox from "../../../components/goldbox";

const OurMission = ({ data: { title, content } }) => {
  return <GoldBox title={title} main={content} />;
};

export default OurMission;
