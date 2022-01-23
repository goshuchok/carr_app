import React, { useEffect, useState } from 'react';
import { Box, Grid, Slider, TextField, Typography } from '@material-ui/core';

function calcFormat(value) {
  let currentValue = value;

  if (currentValue < 12) {
    return `${currentValue} месяцев`;
  } else if (currentValue >= 12) {
    const month = currentValue % 12;
    const year = (currentValue - (currentValue % 12)) / 12;
    return `${year} лет ${month} месяцев`;
  }
  return currentValue;
}

function SliderTerm() {
  const [value, setValue] = useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TextField
        label="Желаемый срок кредита"
        value={`${calcFormat(value)}`}
        size="medium"
        fullWidth
        readOnly
        InputProps={{
          disableUnderline: true,
        }}
      />
      <Slider
        onChange={handleChange}
        step={1}
        min={2}
        max={96}
        defaultValue={3}
      />
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Typography>1 мес</Typography>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Typography align="right">96 мес</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default SliderTerm;
