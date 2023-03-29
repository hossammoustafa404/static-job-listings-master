import styled, { createGlobalStyle } from "styled-components";

// Page Wrapper
const PageWrapper = styled.section`
  padding-top: 7.5rem;
  min-height: 100vh;
  background-image: url("./images/bg-header-mobile.svg");
  @media (min-width: 376px) {
    background-image: url("./images/bg-header-desktop.svg");
  }
  @media (min-width: 1440px) {
    background-size: contain;
  }
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.background};
`;

export default PageWrapper;

// Global Style
export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    body {
        padding: 0;
        margin: 0;
        *,*::before {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'League Spartan', sans-serif;
            font-size: 15px;
        }
        a {
          text-decoration: none;
        }

        button {
            background-color: transparent;
            border: none;
        }

        ul {
            list-style: none;
        }

    }
`;

// Theme
export const theme = {
  main: "hsl(180, 29%, 50%)",
  lightMain: "hsl(180, 29%, 50%,15%)",
  background: "hsl(180, 31%, 95%)",
  jobBackground: "#ffffff",
  shadow: "hsl(180, 8%, 52%)",
  title: "hsl(180, 14%, 20%)",
};
