import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import ButtonWrapper from "./FilterButton.style";

const FilterButton = ({ content }) => {
  const { setNewFilter } = useContext(AppContext);

  //handleClick function
  const handleClick = () => {
    setNewFilter(content);
  };

  return (
    <ButtonWrapper onClick={handleClick} type="button">
      {content}
    </ButtonWrapper>
  );
};

export default FilterButton;
