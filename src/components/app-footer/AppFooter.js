import React from "react";
import FooterWrapper from "./AppFooter.style";

const AppFooter = () => {
  return (
    <FooterWrapper>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>{" "}
      . Coded by{" "}
      <a
        href="https://www.linkedin.com/in/hossam-moustafa-0492a3263/"
        target="_blank"
        rel="noreferrer"
      >
        Hossam Moustafa
      </a>
      .
    </FooterWrapper>
  );
};

export default AppFooter;
