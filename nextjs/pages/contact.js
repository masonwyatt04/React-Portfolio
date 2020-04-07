import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from '../src/Copyright';
import Navbar from '../components/Navbar';
import BottomNav from "../components/BottomNav";

export default function Contact() {
  return ( <>
    <Navbar name="Contact" buttonOne="Homepage" buttonTwo="Projects" linkOne="/" linkTwo="project"/>
    <Container maxWidth="md">
        <Copyright />

    </Container>
    <BottomNav />
    </>
  );
}
