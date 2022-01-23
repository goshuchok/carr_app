import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CarModels() {
  const classes = useStyles();
  const [markId, setMarkId] = useState('');
  const handleChange = (event) => {
    setMarkId(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-model"
          select={true}
          label="Выберите модель"
          value={markId}
          onChange={handleChange}
          variant="outlined"
        ></TextField>
      </div>
    </form>
  );
}
