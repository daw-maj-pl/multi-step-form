import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
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
  const {
    values: { firstName, lastName, email, occupation, city, bio }
  } = props;
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
          <Typography>Confirm User Data</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <List>
            <ListItemText primary="First Name" secondary={firstName} />
            <ListItemText primary="Last Name" secondary={lastName} />
            <ListItemText primary="Email" secondary={email} />
            <ListItemText primary="Occupation" secondary={occupation} />
            <ListItemText primary="City" secondary={city} />
            <ListItemText primary="Bio" secondary={bio} />
          </List>
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
            className={classes.continueBtn}
            onClick={handleContinue}
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FormUserDetails;
