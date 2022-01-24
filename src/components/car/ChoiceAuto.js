import React from 'react';

import CarsCard from './CarsCard';

import { Box, Container, Grid } from '@material-ui/core';
import CarBrand from './CarBrand';
import CarModels from './CarModels';
import PaginationControl from './Pagination';

function ChoiceAuto() {
  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <CarBrand />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CarModels />
          </Grid>
          <Grid item xs={8} sm={12} md={6}></Grid>
        </Grid>
        <CarsCard />
        <PaginationControl />
      </Container>
    </div>
  );
}

export default ChoiceAuto;
