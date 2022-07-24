import * as React from 'react';
import { motion } from 'framer-motion';
import { horizonGroup, verticalGroup } from './homeomorphic';
import type { Variants, Transition } from 'framer-motion';

interface DSNBCoreProps {
  type: 'vertical' | 'horizontal';
}

const DSNBCore: React.FC<DSNBCoreProps> = ({ type }) => {
  const group = type === 'vertical' ? verticalGroup : horizonGroup;

  return (
    <motion.svg
      initial={'start'}
      animate={'end'}
      width={475}
      height={475}
      viewBox={'0 0 475 475'}
      fill={'none'}
    >
      <motion.path
        variants={toVariants(group.lt)}
        transition={defaultTransition}
        fill={'#80BAFF'}
      />
      <motion.path
        variants={toVariants(group.lb)}
        transition={defaultTransition}
        fill={'#80BAFF'}
      />
      <motion.path
        variants={toVariants(group.rb)}
        transition={defaultTransition}
        fill={'#80BAFF'}
      />
      <motion.path
        variants={toVariants(group.rt)}
        transition={defaultTransition}
        fill={'#80BAFF'}
      />
    </motion.svg>
  );
};

export default DSNBCore;

const defaultTransition: Transition = {
  duration: 2,
  repeat: Infinity,
  repeatType: 'mirror',
};

const toVariants = ({
  s1,
  s2,
}: {
  s1: string;
  s2: string;
}): Variants => ({
  start: {
    d: s1,
  },
  end: {
    d: s2,
  }
});
