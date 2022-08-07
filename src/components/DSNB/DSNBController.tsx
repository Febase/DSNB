import * as React from 'react';
import DSNBCore from './DSNBCore';
import { getRandomInteger, getRandomDirection } from './utils';
import type { Direction } from './utils';

const DSNBController: React.FC = () => {
  const [count] = React.useState<number>(getRandomInteger(0, 10));
  const [direction] = React.useState<Direction>(getRandomDirection());

  return (
    <DSNBCore
      startPos={direction}
      count={count}
    />
  );
};

export default DSNBController;
