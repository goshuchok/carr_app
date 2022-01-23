import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import * as calculatorActions from '../../redux/calculator/calculator-action';

function CheckedCar({ price, selected, handleSelected }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected) {
      dispatch(calculatorActions.getFirstinstallment(price));
    }
  }, [dispatch, price, selected]);

  return (
    <FormControlLabel
      style={{ margin: 0 }}
      control={
        <Checkbox
          icon={<CircleUnchecked />}
          checkedIcon={<CircleChecked className="checked_circle" />}
          onChange={() => handleSelected()}
          checked={selected}
        />
      }
      labelPlacement="start"
      label=" Выбрано это авто"
      className="form_control"
    />
  );
}

export default CheckedCar;
