import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import GameScores from '../images/nbascores.png'
// import PasswordGenerator from '../images/randompasswordgenerator.png';
// import Workday from '../images/workdayscheduler.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    marginTop: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#A033FF',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  });


export default function ProjectBody() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
              <Grid item xs={10}>
              <img alt='GameScores' />
              </Grid>
              <Grid item xs={2}>
                <Typography>
                  NBA Game Scores Application
                </Typography>
              </Grid>
          </Grid>

        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
              <Grid item xs={10}>
              <img alt='Password Generator' />
              </Grid>
              <Grid item xs={2}>
                <Typography>
                  Random Password Generator Application
                </Typography>
              </Grid>
          </Grid>

        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
              <Grid item xs={10}>
              <img alt='WorkDay' />
              </Grid>
              <Grid item xs={2}>
                <Typography>
                  Work Day Scheduler Application
                </Typography>
              </Grid>
          </Grid>

        </Paper>

      </Grid>
    </ThemeProvider>

  );
}