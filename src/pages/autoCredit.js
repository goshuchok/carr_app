import React from 'react';
import Slider from '../components/calculator/Slider';
import ChoiceAuto from '../components/car/ChoiceAuto';
import CreditTitle from '../components/car/CreditTitle';
// import FormInformation from '../components/credit/FormInformation';

function AutoCredit() {
  return (
    <>
      <CreditTitle />
      <ChoiceAuto />
      <Slider />
      {/* <FormInformation /> */}
    </>
  );
}

export default AutoCredit;
