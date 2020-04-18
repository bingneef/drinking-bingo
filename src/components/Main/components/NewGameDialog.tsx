import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import BaseFormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import { StoreType } from "../../../store/types";
import { newGame } from "../../../store/game/actions";

interface Props {
  open: boolean;
  onClose: (size?: number) => void;
}

const FormControl = styled(BaseFormControl)`
  width: 100%;
`;

function NewGameDialog({ onClose, open }: Props) {
  const dispatch = useDispatch();
  const game = useSelector((state: StoreType) => state.game);
  const [size, setSize] = useState(game.current?.size || 3);

  function submit() {
    dispatch(newGame(size));
    navigate("/bingo");

    onClose();
  }

  function dismiss() {
    onClose();
  }

  function handleChange(event: React.ChangeEvent<{ value: unknown }>) {
    setSize(event.target.value as number);
  }

  return (
    <Dialog onClose={dismiss} open={open}>
      <DialogTitle>Een nieuwe Bingo kaart!</DialogTitle>
      <DialogContent>
        <FormControl>
          <InputLabel>Aantal vakjes op de kaart</InputLabel>
          <Select value={size} onChange={handleChange}>
            <MenuItem value={2}>2x2</MenuItem>
            <MenuItem value={3}>3x3</MenuItem>
            <MenuItem value={4}>4x4</MenuItem>
            <MenuItem value={5}>5x5</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={dismiss} color="default">
          Annuleren
        </Button>
        <Button onClick={submit} color="primary">
          Start
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewGameDialog;
