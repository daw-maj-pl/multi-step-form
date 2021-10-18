import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  btn: {
    marginLeft: 25
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

const FormUserDetails = props => {
  const { nextStep, prevStep } = props;
  const { firstName, lastName, email, occupation, city, bio } = props.values;
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography className={classes.title}>Confirm User Data</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <List>
            <ListItem>
              <ListItemText
                align="center"
                primary="First Name"
                secondary={firstName}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                align="center"
                primary="Last Name"
                secondary={lastName}
              />
            </ListItem>
            <ListItem>
              <ListItemText align="center" primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText
                align="center"
                primary="Occupation"
                secondary={occupation}
              />
            </ListItem>
            <ListItem>
              <ListItemText align="center" primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText align="center" primary="Bio" secondary={bio} />
            </ListItem>
          </List>
        </Grid>
        <Grid item align="center">
          <Button
            variant="contained"
            className={classes.btn}
            onClick={prevStep}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={nextStep}
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FormUserDetails;
