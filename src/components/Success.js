import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

const Success = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography className={classes.title}>Success</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <Typography align="center" gutterBottom variant="h4">
        Thank You For Your Submission
      </Typography>
      <Typography paragraph align="center">
        You will get an email with further instructions
      </Typography>
    </>
  );
};

export default Success;
