import React from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "@material-ui/core/Button";

interface Props extends RouteComponentProps {
  id: string | number;
  label: string;
  toggleListItem: Function;
  rowToggled?: boolean;
  colToggled?: boolean;
  toggled?: boolean;
}

const BingoTile = ({
  id,
  label,
  toggleListItem,
  rowToggled,
  colToggled,
  toggled,
}: Props) => {
  const lineToggled = rowToggled || colToggled;

  function handleClick() {
    toggleListItem(id);
  }

  return (
    <Button
      onClick={handleClick}
      color={lineToggled ? "secondary" : "primary"}
      variant={toggled ? "contained" : "outlined"}
    >
      {label}
    </Button>
  );
};

export default BingoTile;
