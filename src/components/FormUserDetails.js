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
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
  // centerAppBarTitle: {
  //   margin: 'auto'
  // }
}));

const FormUserDetails = props => {
  const { values, nextStep, handleChange } = props;
  const classes = useStyles();

  return (
    <>
      <AppBar>
        {/* <Toolbar className={classes.centerAppBarTitle}> */}
        <Toolbar>
          <Typography className={classes.title}>Enter User Details</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            value={values.firstName}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            value={values.lastName}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange('email')}
            value={values.email}
          ></TextField>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={nextStep}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FormUserDetails;
