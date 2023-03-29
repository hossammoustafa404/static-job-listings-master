import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import BoxWrapper from "./DeleteFilter.style";

const DeleteFilter = ({ content }) => {
  const { deleteFilter } = useContext(AppContext);
  const handleClick = () => {
    deleteFilter(content);
  };

  return (
    <BoxWrapper className="d-flex">
      <span className="filter-name">{content}</span>
      <button className="delete-btn" type="button" onClick={handleClick}>
        <img src="images/icon-remove.svg" alt="Remove Icon" />
      </button>
    </BoxWrapper>
  );
};

export default DeleteFilter;
