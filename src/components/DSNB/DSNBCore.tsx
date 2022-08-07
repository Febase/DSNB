import * as React from 'react';
import { motion, useAnimationControls, MotionConfig } from 'framer-motion';
import { horizonGroup, verticalGroup } from './homeomorphic';
import type { Direction } from './utils';

interface DSNBCoreProps {
  startPos: Direction;
  count: number;
}

const DSNBCore: React.FC<DSNBCoreProps> = ({
  startPos,
  count,
}) => {
  const controls = useAnimationControls();
  const group = horizonGroup;

  const ref = React.useRef<SVGSVGElement | null>(null);

  const startRotate = (startPos === 't' || startPos === 'b') ? 90 : 0;
  const runCount = React.useRef<number>(0);

  React.useEffect(() => {
    const el = ref.current;
    if (el === null) return;

    const run = async () => {
      el.style.transform = `rotate(${startRotate + runCount.current * 90}deg)`;
      await controls.start((k: 'lt' | 'lb' | 'rb' | 'rt') => ({
        d: [group[k].s1, group[k].s2, group[k].s1],
      }));

      if (runCount.current < count - 1) {
        runCount.current++;
        run();
      }
    }

    run();
  }, []);

  return (
    <MotionConfig
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      <motion.svg
        width={475}
        height={475}
        viewBox={'0 0 475 475'}
        fill={'none'}
        ref={ref}
      >
        <motion.path
          custom={'lt'}
          animate={controls}
          fill={'#80BAFF'}
        />
        <motion.path
          custom={'lb'}
          animate={controls}
          fill={'#80BAFF'}
        />
        <motion.path
          custom={'rb'}
          animate={controls}
          fill={'#80BAFF'}
        />
        <motion.path
          custom={'rt'}
          animate={controls}
          fill={'#80BAFF'}
        />
      </motion.svg>
    </MotionConfig>
  );
};

export default DSNBCore;

const getGroup = (type: Direction): typeof horizonGroup | typeof verticalGroup => {
  if (type === 't' || type === 'b') {
    return verticalGroup;
  } else {
    return horizonGroup;
  }
};
