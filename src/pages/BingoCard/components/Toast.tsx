import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  label: string;
}
const Toast = ({ open, setOpen, label }: Props) => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (!label) {
    return null;
  }

  return (
    <Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        {label}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
