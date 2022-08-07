export const getRandomInteger =
  (min: number, max: number): number => {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);

    return Math.floor(Math.random() * (_max - _min)) + _min;
  };

export type Direction = 'l' | 't' | 'r' | 'b';

export const getRandomDirection = (): Direction => {
  const randomInt = getRandomInteger(0, 4);

  switch (randomInt) {
    case 0: {
      return 'l';
    }
    case 1: {
      return 't';
    }
    case 2: {
      return 'r';
    }
    case 3: {
      return 'b';
    }
    default: {
      throw new Error();
    }
  }
};
