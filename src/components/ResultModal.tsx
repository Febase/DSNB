import { styled } from '@stitches/react';
import { motion } from 'framer-motion';

const ResultModal = () => {
  return (
    <Wrapper>
      <Title>*** 당첨!</Title>
      <Button>다시하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContents: 'center',
  padding: '2rem',
  backgroundColor: 'white',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  borderRadius: '20px',
});

const Title = styled('h1', {
  fontSize: '3rem',
  padding: '1rem 0 2rem',
});

const Button = styled(motion.button, {
  color: 'white',
  background: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
  border: 'none',
  padding: '1.5rem',
  borderRadius: '20px',
  fontSize: '2rem',
  fontWeight: 'bold',
  cursor: 'pointer',

  '&::focus': {
    outline: 'none',
  },
});

export default ResultModal;
