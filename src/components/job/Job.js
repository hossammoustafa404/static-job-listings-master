import React from "react";
import FilterButton from "../filter-button/FilterButton";
import JobWrapper from "./Job.style";

const Job = ({ job }) => {
  const renderedFilters = [
    <FilterButton key={0} content={job.role} />,
    <FilterButton key={1} content={job.level} />,
    ...job.languages.map((language, index) => (
      <FilterButton key={index + 2} content={language} />
    )),
  ];

  return (
    <JobWrapper className="d-flex flex-column flex-lg-row align-items-lg-center">
      <img
        className="logo"
        src={job.logo}
        alt={`${job.company} Logo`}
        aria-hidden
      />

      <div className="info-box">
        <header className="d-flex align-items-center">
          <h3 className="company-name ">{job.company}</h3>
          {job.new && <span className="new text-uppercase">new!</span>}
          {job.featured && (
            <span className="featured text-uppercase">featured</span>
          )}
        </header>
        <a className="job-position" href="#home">
          {job.position}
        </a>
        <footer className="d-flex gap-2 align-items-center">
          <span className="posted-time">{job.postedAt}</span>
          <span className="dot">.</span>
          <span className="job-contract">{job.contract}</span>
          <span className="dot">.</span>
          <span className="job-location">{job.location}</span>
        </footer>
      </div>

      <div className="filters-box d-flex gap-3 flex-wrap ms-lg-auto">
        {renderedFilters}
      </div>
    </JobWrapper>
  );
};

export default Job;
