import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StoreType } from "../../../store/types";
import {
  DialogTitle,
  InputLabel,
  Select,
  FormControl as BaseFormControl,
  MenuItem,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

interface Props {
  open: boolean;
  onClose: (size?: number) => void;
}

const FormControl = styled(BaseFormControl)`
  width: 100%;
`;

function NewGameDialog({ onClose, open }: Props) {
  const game = useSelector((state: StoreType) => state.game);
  const [size, setSize] = useState(game.current?.size || 3);

  function submit() {
    onClose(size);
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
        <Button onClick={dismiss} color="primary">
          Cancel
        </Button>
        <Button onClick={submit} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewGameDialog;
