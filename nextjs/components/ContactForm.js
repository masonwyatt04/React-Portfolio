import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ContactSnackbar from '../components/ContactSnackbar';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    button: {
      marginLeft: theme.spacing(1),
    }
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


export default function ContactForm() {
  const classes = useStyles();

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Grid container spacing={3}>
          
          <Grid item xs={12}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
             </form>
          </Grid>

          <Grid item xs={12}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </form>
          </Grid>

          <Grid item xs={12}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-textarea"
                    label="Message"
                    placeholder=""
                    multiline
                    variant="outlined"
                />
            </form>
          </Grid>
        
          <Grid item xs={12}>
            <ContactSnackbar />
          </Grid>
      </Grid>
    </div>
    </ThemeProvider>

  );
}