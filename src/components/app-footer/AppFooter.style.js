import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.veryDarkBlue};
  color: ${({ theme }) => theme.offWhite};
  a {
    color: ${({ theme }) => theme.softRed};
    display: inline;
  }
`;
export default FooterWrapper;
