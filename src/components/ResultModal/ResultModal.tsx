import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import Star from './StarPop.svg';

interface Props {
  winnerName: string;
  onRetry: () => void;
}

const ResultModal = ({ winnerName, onRetry }: Props) => {
  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <img src={Star} width={400} />
      <Title>{winnerName} 당첨!</Title>
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
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  borderRadius: '20px',
  width: '80%',
  margin: 'auto',
});

const Title = styled('h1', {
  fontSize: '5rem',
});

const Button = styled(motion.button, {
  color: 'white',
  background: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
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
