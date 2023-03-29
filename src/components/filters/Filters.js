import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import DeleteFilter from "../delete-filter/DeleteFilter";
import BoxWrapper from "./Filters.style";

const Filters = () => {
  const { filters, clearFilters } = useContext(AppContext);

  const renderedFilters = filters.map((filter, index) => (
    <DeleteFilter key={index} content={filter} />
  ));

  const handleClick = () => {
    clearFilters();
  };

  return (
    <BoxWrapper className="d-flex justify-content-between align-items-center">
      <div className="left-box d-flex gap-3 flex-wrap">{renderedFilters}</div>
      <button
        className="clear-btn text-capitalize"
        type="button"
        onClick={handleClick}
      >
        clear
      </button>
    </BoxWrapper>
  );
};

export default Filters;
