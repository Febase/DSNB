import * as React from 'react';
import { motion } from 'framer-motion';
import { horizonGroup, verticalGroup } from './homeomorphic';
import type { Variants } from 'framer-motion';

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
        transition={{
          duration: 2,
          repeat: Infinity,
            repeatType: 'mirror',
        }}
        fill={'#80BAFF'}
      />
      <motion.path
        variants={toVariants(group.lb)}
        transition={{
          duration: 2,
          repeat: Infinity,
            repeatType: 'mirror',
        }}
        fill={'#80BAFF'}
      />
      <motion.path
        variants={toVariants(group.rb)}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        fill={'#80BAFF'}
      />
      <motion.path
        variants={toVariants(group.rt)}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        fill={'#80BAFF'}
      />
    </motion.svg>
  );
};

export default DSNBCore;

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
