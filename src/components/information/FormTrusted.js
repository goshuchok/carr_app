import { Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

function FormTrusted() {
  const [trustPerson, setTrustPerson] = useState('');
  const [trustPhone, setTrustPhone] = useState('');
  const [trustMembers, setTrustMembers] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
  };

  const handleInputChangePerson = (e) => {
    setTrustPerson(e.target.value);
  };
  const handleInputChangePhone = (e) => {
    setTrustPhone(e.target.value);
  };
  const handleInputChangeMembers = (e) => {
    setTrustMembers(e.target.value);
  };

  return (
    <div>
      <h4 className="trusted_persons">Доверенные лица</h4>
      <form onSubmit={submitForm}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="ФИО"
              variant="outlined"
              fullWidth={true}
              type="text"
              value={trustPerson}
              onChange={handleInputChangePerson}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="outlined-basic"
              label="Мобильный телефон"
              variant="outlined"
              fullWidth={true}
              type="tel"
              value={trustPhone}
              onChange={handleInputChangePhone}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="outlined-basic"
              label="Кем приходится"
              variant="outlined"
              fullWidth={true}
              type="text"
              value={trustMembers}
              onChange={handleInputChangeMembers}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default FormTrusted;
