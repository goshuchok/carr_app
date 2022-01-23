import { useEffect, useState } from 'react';
import {
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Typography,
} from '@material-ui/core';

// import CarView from "./CarView";

export default function CarCard() {
  const [selectedCar, setSelectedCar] = useState(null);

  const carCards = 0;

  return (
    <>
      {carCards.length === 0 ? (
        <Typography>Cars not found</Typography>
      ) : (
        <Typography>Cars {carCards.length}: auto</Typography>
      )}
    </>
  );
}
