import React from "react";
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 700,
      padding: theme.spacing(2, 4, 3),
    },
    emailField: {
      minWidth: 300,
    },
    password: {
      width: 300,
    },
  })
);

interface SignUpDialogProps {
  closeModal: () => void;
}

const SignUpDialog = (props: SignUpDialogProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container alignContent="flex-start" spacing={2}>
        <Grid item xs={12}>
          <h1 id="simple-modal-title">Create an account</h1>
        </Grid>
        <Grid item xs={12}>
          <p>
            Please follow the instructions below to request an activation code
            for yourself. You must be at least 12 years old to use My Psych
            Guide.
          </p>
          <p>
            We need some information from you in order to grant you a My Psych
            Guide account. Please allow up to one business day for processing
            and verification. Should we have any questions regarding your
            submission, we will contact you via the phone number you have
            submitted.
          </p>
        </Grid>
        <Grid item xs={12}>
          <h3>Name</h3>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-textarea"
            label="First Name"
            placeholder="First"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Middle Name"
            placeholder="Middle"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Last Name"
            placeholder="Last"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.emailField}
            label="Enter Email"
            placeholder="email@email.com"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <h3>Create a Password</h3>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.password}
            label="Create a Password"
            placeholder="Password1234!"
            variant="outlined"
            required
            helperText="Enter a combination of at least six numbers, letters and Punctuation marks (like ! and #)"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.password}
            label="Verify Password"
            placeholder="Password1234!"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item>
          <Button color="inherit" onClick={props.closeModal}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SignUpDialog;
