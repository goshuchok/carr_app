import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as infoActions from '../../redux/information/information-action';

function FormBorrower() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    workPhone: '',
    location: '',
  });

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    dispatch(infoActions.getInformation(values));
  };

  return (
    <form>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Полное ФИО"
            variant="outlined"
            fullWidth={true}
            type="text"
            value={values.name}
            onChange={handleChange('name')}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="outlined-basic"
            label="Мобильный телефон"
            variant="outlined"
            fullWidth={true}
            type="tel"
            value={values.phone}
            onChange={handleChange('phone')}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="outlined-basic"
            label="Рабочий телефон"
            variant="outlined"
            fullWidth={true}
            type="tel"
            value={values.workPhone}
            onChange={handleChange('workPhone')}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            label="Адрес фактического проживания "
            variant="outlined"
            fullWidth={true}
            type="text"
            value={values.location}
            onChange={handleChange('location')}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default FormBorrower;
