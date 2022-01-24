import { useEffect, useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMarkId,
  getModelsId,
  getCarCards,
  getPage,
} from '../../redux/selectors';
import * as selectors from '../../redux/selectors';
import * as autoOperations from '../../redux/autosCard/auto-operations';
import shield from '../../images/shield.png';
import no_image from '../../images/no_image.png';
import CheckedCar from './CheckedCar';

export default function CarCard() {
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  const model = useSelector(getModelsId);
  const mark = useSelector(getMarkId);
  const page = useSelector(getPage);
  const carCards = useSelector(getCarCards);
  const priceForEveryMonths = useSelector(selectors.getPriceForEveryMonths);
  useEffect(() => {
    let cars = {
      model: model,
      mark: mark,
      page: page,
    };
    dispatch(autoOperations.fetchCarCards(cars));
  }, [dispatch, mark, model, page]);

  const carImage = carCards.photoData?.seoLinkSX ?? no_image;

  return (
    <div>
      {carCards.length === 0 ? (
        <Typography>Cars not found</Typography>
      ) : (
        <Typography>Cars {carCards.length}: auto</Typography>
      )}
      <Grid container spacing={3}>
        {carCards.map((car) => (
          <Grid key={car.userId} item xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                {carImage ? (
                  <CardMedia
                    style={{ height: 0, paddingTop: '56.25%' }}
                    image={car.photoData?.seoLinkF ?? no_image}
                  />
                ) : (
                  <CircularProgress />
                )}
              </CardActionArea>
              <CardActionArea
                className={
                  selected !== car.userId ? 'selected ' : 'selected clicked'
                }
              >
                <CardContent>
                  <Typography style={{ color: '#949494', paddingBottom: 10 }}>
                    {car.autoData?.year} год / {car.autoData?.gearboxName}
                  </Typography>
                  <p className="car_name clicked">
                    {car.markName} {car.modelName} {car.autoData?.year} года
                  </p>
                  <Grid
                    container
                    className="card_prices"
                    justifyContent="space-between"
                  >
                    <Grid item sm={6}>
                      <p className="price_black">{car.UAH} UA</p>
                    </Grid>
                    <Grid item sm={6} className="align_text">
                      <p className="month_black">
                        от{' '}
                        {selected === car.userId
                          ? priceForEveryMonths.toFixed(0)
                          : '0'}{' '}
                        UA / мес.
                      </p>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className="card_prices"
                    justifyContent="space-between"
                  >
                    <Grid item sm={6}>
                      <Grid>
                        <p className="price_blue">{car.UAH} UA</p>
                        <img
                          src={shield}
                          alt="shield"
                          style={{ marginTop: '26px' }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item sm={6} className="align_text">
                      <p className="month_blue">
                        от{' '}
                        {selected === car.userId
                          ? priceForEveryMonths.toFixed(0)
                          : '0'}{' '}
                        UA / мес.
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container className="card_controls">
                    <CheckedCar
                      price={car.UAH}
                      selected={selected === car.userId}
                      handleSelected={() =>
                        setSelected(
                          selected !== car.userId ? car.userId : false
                        )
                      }
                    />
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
