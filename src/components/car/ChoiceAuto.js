import React from 'react';

import CarsCard from './CarsCard';

import { Box, Container } from '@material-ui/core';
import CarBrand from './CarBrand';
import CarModels from './CarModels';
import PaginationControl from './Pagination';

function ChoiceAuto() {
  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <Box style={{ display: 'flex' }}>
          <CarBrand />
          <CarModels />
        </Box>
        <CarsCard />
        <PaginationControl />
      </Container>
    </div>
  );
}

export default ChoiceAuto;
