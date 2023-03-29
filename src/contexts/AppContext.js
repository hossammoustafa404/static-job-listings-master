import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);

  //   Methods
  const setNewFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const deleteFilter = (fi) => {
    const newFilters = filters.filter((filter) => filter !== fi);
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  //State
  const state = {
    filters,

    setNewFilter,
    deleteFilter,
    clearFilters,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
