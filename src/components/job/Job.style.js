import styled from "styled-components";

const JobWrapper = styled.li`
  background-color: ${({ theme }) => theme.jobBackground};
  box-shadow: 0 0.2rem 1.1rem -0.6rem ${({ theme }) => theme.shadow};
  padding: 1.5rem;
  padding-top: 2.3rem;
  margin-bottom: 3.5rem;
  border-radius: 0.3rem;
  &:first-child,
  &:nth-child(2) {
    border-left: 0.35rem solid ${({ theme }) => theme.main};
  }
  position: relative;

  @media (min-width: 992px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .logo {
    transform: translateY(-50%);
    position: absolute;
    top: 0;
    width: 3.5rem;

    @media (min-width: 992px) {
      width: 4rem;
      margin-right: 1rem;
      position: static;
      transform: translateY(0);
    }
  }

  .info-box {
    padding-bottom: 1.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.shadow};
    margin-bottom: 1rem;
    @media (min-width: 992px) {
      margin-bottom: 0;
      border-bottom: none;
      padding-bottom: 0;
    }

    header {
      margin-bottom: 0.7rem;

      @media (min-width: 992px) {
        margin-bottom: 0.5rem;
      }
      .company-name {
        font-size: 1rem;
        font-weight: 700;
        color: ${({ theme }) => theme.main};
        margin-right: 1.2rem;
      }
      .new,
      .featured {
        display: inline-block;
        padding: 0.15rem 0.6rem;
        border-radius: 20px;
        color: ${({ theme }) => theme.jobBackground};
        font-size: 0.9rem;
        font-weight: 500;
      }
      .new {
        background-color: ${({ theme }) => theme.main};
        margin-right: 0.6rem;
      }
      .featured {
        background-color: ${({ theme }) => theme.title};
      }
    }

    .job-position {
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.title};
      margin-bottom: 0.7rem;
      @media (min-width: 992px) {
        margin-bottom: 0.5rem;
      }
      transition: 0.2s;
      &:hover {
        color: ${({ theme }) => theme.main};
      }
    }

    footer {
      color: ${({ theme }) => theme.shadow};
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export default JobWrapper;
