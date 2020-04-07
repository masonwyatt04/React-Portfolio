import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
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

export default function ContactSnackbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Button className={classes.button} href='/' color='primary' variant='contained' onClick={handleClick}>
        Submit
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thank you!
        </Alert>
      </Snackbar>
    </div>
    </ThemeProvider>

  );
}