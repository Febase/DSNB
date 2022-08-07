import * as React from 'react';
import { styled } from '@stitches/react';
import { AnimatePresence } from 'framer-motion';
import {
  DSNBBase,
  DSNBController,
  ResultModal,
  Modal,
  InputBox,
} from './components';
import { getRandomInteger } from './components/DSNB/utils';
import './App.css'
import Logo from '../static/logo.png'
import type { DSNBControllerRef } from './components';

const Root = styled('div', {
  background: '#ddd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const AppContainer = styled('div', {
  maxWidth: '1280px',
  background: 'white',
  width: '100%',
  height: '100vh',
  display : 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const DSNBContainer = styled('div', {
  position: 'relative',
  width: 475,
  height: 475,
});

const StartButton = styled('button', {
  color: '#000',
  fontSize: 18,
  borderRadius: 35,
  padding: '8px 20px',
  fontWeight: 500,
  cursor: 'pointer',
  position: 'relative',
  display: 'inline-block',
  transition: 'box-shadow 300ms ease-in-out, color 300ms ease-in-out',
  '&:hover' : {
    boxShadow: '0 0 40px 40px rgb(0, 116, 255) inset',
    color : '#fff'
  }
});

const LogoImg = styled('img', {
  height: '100px'
});

const App: React.FC = () => {
  const [isStart, setStart] = React.useState<boolean>(false);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const handleStart = () => {
    setStart(true);
    // start 눌렀을 때 애니메이션
  };

  const [isFill, setIsFill] = React.useState(false);

  const onClickRetry = () => {
    setStart(false);
    setModalOpen(false);
    setInputData(new Array(8).fill(''));
  }

  const dsnbControllerRef = React.useRef<DSNBControllerRef>({
    start: () => {},
  });

  const [isBaseEnd, setIsBaseEnd] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!isBaseEnd) return;
    dsnbControllerRef.current.start();
  }, [isBaseEnd]);

  const [inputData, setInputData] = React.useState<string[]>(new Array(8).fill(''));
  const handleInputData = (changeData: string, index: number): void => {
    setInputData(
      (prev) =>
        prev.map((el, idx) => idx === index ? changeData : el)
    );
  };

  return (
    <Root className="App">
      <AppContainer>
        <LogoImg src={Logo} />
        <DSNBContainer>
          <DSNBController
            onEnded={() => {
              setModalOpen((prev) => !prev);
            }}
            ref={dsnbControllerRef}
          />
          {!isStart && (
            <InputBox
              inputData={inputData}
              handleInputData={handleInputData}
              setIsFill={setIsFill}
            />
          )}
          <DSNBBase
            isStart={isStart}
            onAnimationComplete={() => setIsBaseEnd((prev) => !prev)}
          />
          {isFill && !isStart && <StartButton onClick={handleStart}>START 동서남북</StartButton>}
        </DSNBContainer>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && (
            <ResultModal
              text={inputData[getRandomInteger(0, 7)]}
              onRetry={onClickRetry}
            />
          )}
        </AnimatePresence>
      </AppContainer>
    </Root>
  );
};

export default App;
