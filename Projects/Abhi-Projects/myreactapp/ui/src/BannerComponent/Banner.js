import "./Banner.css";
import VisitorBanner from "./VisitorBanner";

import React from "react";
import { useState, useEffect } from "react";

function Banner() {
  const [bannercontent, setBannerContent] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("role") == "admin" ||
      localStorage.getItem("role") == "user"
    ) {
      setBannerContent(<div></div>);
    } else {
      setBannerContent(<VisitorBanner />);
    }
  }, []);

  return <div>{bannercontent}</div>;
}

export default Banner;
