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
  btn: {
    margin: 15
  },
  centerAppBarTitle: {
    margin: 'auto'
  }
}));

const FormPersonalDetails = props => {
  const { values, handleChange } = props;
  const classes = useStyles();

  const handleContinue = e => {
    e.preventDefault();
    props.nextStep();
  };

  const handleBack = e => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <>
      <AppBar>
        <Toolbar className={classes.centerAppBarTitle}>
          <Typography>Enter Personal Details</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Enter Your City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          ></TextField>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.btn}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FormPersonalDetails;
