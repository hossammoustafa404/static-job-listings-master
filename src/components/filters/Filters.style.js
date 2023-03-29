import styled from "styled-components";

const BoxWrapper = styled.div`
  margin-bottom: 4rem;
  border-radius: 0.3rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.jobBackground};
  box-shadow: 0 0.2rem 1.1rem -0.6rem ${({ theme }) => theme.shadow};
  @media (min-width: 992px) {
    margin-bottom: 1.5rem;
  }

  .clear-btn {
    color: ${({ theme }) => theme.shadow};
    transition: 0.2s;

    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: calc(100% - 0.2rem);
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0.1rem;
      background-color: ${({ theme }) => theme.main};
      transition: 0.2s;
    }
    &:hover {
      color: ${({ theme }) => theme.main};
      &::before {
        width: 100%;
      }
    }
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
  }
`;
export default BoxWrapper;
