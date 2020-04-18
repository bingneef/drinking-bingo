import React from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

interface Props extends RouteComponentProps {
  id: string | number;
  label: string;
  toggleListItem: Function;
  rowToggled?: boolean;
  colToggled?: boolean;
  toggled?: boolean;
}

const Label = styled(Typography)`
  font-size: 0.75rem;
  ${({ theme }) => `
    ${theme.breakpoints.up("md")} {
      font-size: 0.875rem;
    }
  `}
`;

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
      <Label>{label}</Label>
    </Button>
  );
};

export default BingoTile;
