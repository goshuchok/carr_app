import React from 'react';

import CarsCard from './CarsCard';
// import CreditInput from './CreditInput';
import { Container } from '@material-ui/core';
import CarBrand from './CarBrand';
import CarModels from './CarModels';
// import PaginationControl from './Pagination';

function ChoiceAuto() {
  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <CarBrand />
        <CarModels />

        <CarsCard />
        {/* <PaginationControl /> */}
      </Container>
    </div>
  );
}

export default ChoiceAuto;
