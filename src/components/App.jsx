import React from 'react';
import { Container, Grid } from '@mui/material';
import NavBar from './ui/NavBar';
import Banner from './ui/Banner';
import CustomTable from './ui/CustomTable';
import Reviews from './ui/Reviews';
import FormaZapolnenia from './ui/FormaZapolnenia';
import Footer from './ui/Footer';
import AccordionExpandIcon from './ui/AccordionExpandIcon';
import FormaEnd from './ui/FormaEnd';

export default function App({ children }) {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={9}>
        <NavBar />
        <Banner />
        <FormaZapolnenia />
        <CustomTable />
        <Reviews />
        <AccordionExpandIcon />
        <FormaEnd/>
        <Footer />
      </Grid>
      {/* <Grid >
          {children}
        </Grid> */}
    </Grid>
  );
}
