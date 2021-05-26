import React from "react";
import Button from "@material-ui/core/Button";
import { Modal } from "@material-ui/core";
import SignUpDialog from "../forms/SignUpDialog";

const SignUpButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SignUpDialog closeModal={handleClose} />
      </Modal>
    </>
  );
};

export default SignUpButton;
