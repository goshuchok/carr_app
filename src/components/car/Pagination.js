import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled() {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log('page', page);

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}
