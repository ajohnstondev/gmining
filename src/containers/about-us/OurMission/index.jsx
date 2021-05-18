import React from "react";

import GoldBox from "../../../components/goldbox";
import RRenderer from "../../../components/richtextRenderer";
import * as styles from "./index.module.scss";

const OurMission = ({ data: { title, content } }) => {
  return <GoldBox title={title} main={content} />;
};

export default OurMission;
