import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from '../src/Copyright';
import Navbar from '../components/Navbar';
import BottomNav from "../components/BottomNav";
import IndexInfo from '../components/IndexInfo';

export default function Index() {
  return ( <>
    <Navbar name="Mason Wyatt's Coding Portfolio" buttonOne="Contact" buttonTwo="Projects" linkOne="contact" linkTwo="project"/>
    <Container maxWidth="lg">
        <IndexInfo />
        <Copyright />
    </Container>
    <BottomNav />
    </>
  );
}
