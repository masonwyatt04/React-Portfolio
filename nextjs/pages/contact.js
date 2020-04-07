import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from '../src/Copyright';
import Navbar from '../components/Navbar';
import BottomNav from "../components/BottomNav";
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return ( <>
    <Navbar name="Contact" buttonOne="Homepage" buttonTwo="Projects" linkOne="/" linkTwo="project"/>
    <Container maxWidth='md'>
      <ContactForm />
    </Container>
    <BottomNav />
    </>
  );
}
