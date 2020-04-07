import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
  },
  paragraph: {
      marginTop: theme.spacing(3),
      fontSize: 24,
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


export default function IndexInfo() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper elevation={5} className={classes.paper}>
          <img alt='Placeholder'/>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={5} className={classes.paper}>
            <Typography className={classes.paragraph}>
                Welcome to Mason Wyatt’s professional programming and coding portfolio,
                showcasing his latest projects and unique problem-solving skillset. He is determined, creative,
                decisive and coachable: any programming team would be strengthened by his ability to meet deadlines with
                excellence and valuable determination.
            </Typography>
            <Typography className={classes.paragraph}>
                He lives in Austin, TX and enjoys gaming, working out, astronomy, reading and researching new topics.
                Fun fact: he played golf at UMHB during his undergraduate years, achieving upper-level proficiency in
                the sport and leading as team captain for two semesters.
            </Typography>
            <Typography className={classes.paragraph}>
                Enjoy perusing his sample work, see his contact information below, and feel free to reach out with any
                questions.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>

  );
}