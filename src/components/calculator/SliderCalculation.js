import React, { useEffect } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as calculatorActions from '../../redux/calculator/calculator-action';
import * as selectors from '../../redux/selectors';
import calculator from '../../redux/js/index';

function SliderCalculation() {
  const price = useSelector(selectors.getFirstinstallment);
  const months = useSelector(selectors.getMonths);
  const percentage = useSelector(selectors.getPercentage);
  const priceForEveryMonths = useSelector(selectors.getPriceForEveryMonths);
  const dispatch = useDispatch();

  const isThisNaN = (value) => {
    if (isNaN(value)) {
      return 0;
    }
    return value.toFixed(0);
  };

  useEffect(() => {
    dispatch(
      calculatorActions.getPriceForEveryMonths(
        calculator(price, months, percentage)
      )
    );
  }, [dispatch, months, percentage, price]);

  return (
    <Container>
      <Box borderTop={1}>
        <Grid container direction="row" spacing={4}>
          <Grid item lg={3} md={3} sm={6}>
            <p className="car_cost">Стоимость авто</p>
            <p className="car_sum">{price || 0} UA</p>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <p className="car_cost">Ежемесячный платёж</p>
            <p className="car_sum">{isThisNaN(priceForEveryMonths)} UA</p>
          </Grid>

          <Grid item lg={6} md={6} sm={12} />
        </Grid>
      </Box>
    </Container>
  );
}

export default SliderCalculation;
