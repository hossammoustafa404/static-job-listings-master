import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import PageWrapper, { GlobalStyle, theme } from "./App.style";
import AppFooter from "./components/app-footer/AppFooter";
import Filters from "./components/filters/Filters";
import Job from "./components/job/Job";
import { AppContext } from "./contexts/AppContext";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const { filters } = useContext(AppContext);

  // filterJobs function
  const filterJobs = () => {
    const filteredJobs = jobs.filter((job) => {
      let cnt = 0;
      for (let i = 0; i < filters.length; i++) {
        if (
          job.languages.includes(filters[i]) ||
          job.role === filters[i] ||
          job.level === filters[i]
        ) {
          cnt++;
        }
      }
      if (filters.length == cnt) {
        return job;
      }
    });
    return filteredJobs;
  };

  let renderedJobs = [];

  if (filters.length) {
    renderedJobs = filterJobs().map((job) => <Job key={job.id} job={job} />);
  } else {
    renderedJobs = jobs.map((job) => <Job key={job.id} job={job} />);
  }

  // fetchJobs function
  const fetchJobs = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageWrapper>
        <div className="container gx-5">
          {filters.length !== 0 && <Filters />}
          <ul className="jobs-list">{renderedJobs}</ul>
        </div>
        <AppFooter />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default App;
