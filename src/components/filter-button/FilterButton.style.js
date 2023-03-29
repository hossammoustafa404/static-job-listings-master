import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.lightMain};
  color: ${({ theme }) => theme.main};
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.jobBackground};
  }
  padding: 0.25rem 0.75rem;
  border-radius: 0.3rem;
  font-weight: 700;
`;

export default ButtonWrapper;
