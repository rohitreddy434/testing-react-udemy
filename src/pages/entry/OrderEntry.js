import React from 'react';
import Options from './Options';

export default function OrderEntry() {
  return (
    <div>
      <Options optionsType='scoops' />
      <Options optionsType='toppings' />
    </div>
  );
}
