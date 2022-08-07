import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import Star from './StarPop.svg';

interface Props {
  text: string;
  onRetry: () => void;
}

const ResultModal = ({ text, onRetry }: Props) => {
  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <img src={Star} width={400} />
      <Title>축하합니다 {text}!</Title>
      <Button onClick={onRetry}>다시하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContents: 'center',
  padding: '2rem',
  backgroundColor: 'white',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  borderRadius: '20px',
  width: '80%',
  margin: 'auto',
  position: 'relative',
  zIndex: 10
});

const Title = styled('h1', {
  fontSize: '5rem',
});

const Button = styled(motion.button, {
  color: 'white',
  background: '#80B9FF',
  border: 'none',
  width: '100%',
  padding: '1.5rem',
  borderRadius: '20px',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',

  '&::focus': {
    outline: 'none',
  },
});

export default ResultModal;
