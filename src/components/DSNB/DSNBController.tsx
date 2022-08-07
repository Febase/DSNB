import * as React from 'react';
import DSNBCore from './DSNBCore';
import { getRandomInteger, getRandomDirection } from './utils';
import type { Direction } from './utils';

interface DSNBControllerProps {
  onEnded: () => void;
}

export interface DSNBControllerRef {
  start: () => void;
}

const DSNBController = React.forwardRef<
  DSNBControllerRef,
  DSNBControllerProps
>(
  ({ onEnded }, ref) => {
    const [count] = React.useState<number>(getRandomInteger(4, 15));
    const [direction] = React.useState<Direction>(getRandomDirection());

    const [isStart, setIsStart] = React.useState<boolean>(false);

    React.useImperativeHandle<
      DSNBControllerRef,
      DSNBControllerRef
    >(
      ref,
      () => ({
        start() {
          setIsStart(true);
        },
      }),
    );

    return (
      <DSNBCore
        isStart={isStart}
        startPos={direction}
        count={count}
        onEnded={onEnded}
      />
    );
  }
);

export default DSNBController;
