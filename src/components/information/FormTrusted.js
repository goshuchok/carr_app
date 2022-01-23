import { Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as infoActions from '../../redux/information/information-action';

function FormTrusted() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    person: '',
  });

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    dispatch(infoActions.getTrusted(values));
  };

  return (
    <div>
      <h4 className="trusted_persons">Доверенные лица</h4>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="ФИО"
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
              label="Кем приходится"
              variant="outlined"
              fullWidth={true}
              type="text"
              value={values.person}
              onChange={handleChange('person')}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default FormTrusted;
