import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as selectors from '../../redux/selectors';
import { useSelector } from 'react-redux';

function FormSubmit() {
  const percentage = useSelector(selectors.getPercentage);
  const months = useSelector(selectors.getMonths);
  const firstInstallment = useSelector(selectors.getFirstinstallment);
  const priceForEveryMonth = useSelector(selectors.getPriceForEveryMonths);
  const information = useSelector(selectors.getInformation);
  const trusted = useSelector(selectors.getTrusted);

  const handleSubmit = () => {
    console.log(
      `При оплаті ${percentage}% вартості автомобіля, беручи позику під 17% на ${months} місяців, Ваша сума кредиту буде дорівнювати ${firstInstallment} грн з щомісячним латежем ${priceForEveryMonth} грн.
      
      Кредит надається: ${information.name}.
      Мобільний телефон: ${information.phone}.
      Робочий телефон: ${information.workPhone}.
      Адреса проживання: ${information.location}.
      Поручитель: ${trusted.name}.
      Мобільний телефон: ${trusted.phone}.
      Приходиться кредитуємому: ${trusted.person} 
      `
    );
  };
  return (
    <Grid
      container
      className="form_submit"
      direction="row"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12} sm={6}>
        <Typography>
          Отправляя заявку вы соглашатесь с условями обработки{' '}
          <a href="/autocredit" style={{ color: '#07b1fd' }}>
            персональных данных
          </a>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="row"
        justifyContent="flex-end"
      >
        <button className="submit_button" onClick={handleSubmit}>
          Отправить заявку
        </button>
      </Grid>
    </Grid>
  );
}

export default FormSubmit;
