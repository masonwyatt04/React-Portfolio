import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BuildIcon from '@material-ui/icons/Build';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: theme.spacing.unit, // You might not need this now
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
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

  export default function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <ThemeProvider theme={theme}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Homepage" value="homepage" icon={<HomeIcon />} />
        <BottomNavigationAction label="Contact" value="contact" icon={<MailOutlineIcon />} />
        <BottomNavigationAction label="Projects" value="projects" icon={<BuildIcon />} />
      </BottomNavigation>
      </ThemeProvider>
    );
  }