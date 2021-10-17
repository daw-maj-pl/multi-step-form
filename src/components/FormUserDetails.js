import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  continueBtn: {
    margin: 15
  },
  centerAppBarTitle: {
    margin: 'auto'
  }
}));

const FormUserDetails = props => {
  const { values, handleChange } = props;
  const classes = useStyles();

  const handleContinue = e => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <>
      <AppBar>
        <Toolbar className={classes.centerAppBarTitle}>
          <Typography>Enter User Details</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          ></TextField>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.continueBtn}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FormUserDetails;
