import styled from "styled-components";

const BoxWrapper = styled.div`
  border-radius: 1rem;

  .filter-name {
    display: inline-block;
    background-color: ${({ theme }) => theme.lightMain};
    color: ${({ theme }) => theme.main};
    padding: 0.25rem 0.75rem;
    font-weight: 700;
  }

  .delete-btn {
    background-color: ${({ theme }) => theme.main};
    transition: 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.title};
    }
    padding: 0 0.5rem;
  }
`;

export default BoxWrapper;
