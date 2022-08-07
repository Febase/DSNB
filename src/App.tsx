import { useEffect, useState } from 'react';
import './App.css'
import DSNBBase from './components/DSNBBase'
import ResultModal from './components/ResultModal/ResultModal';
import { AnimatePresence } from 'framer-motion';
import Modal from "./components/Modal/modal";
import {styled} from '@stitches/react';
import InputBox from "./components/Input/inputBox";

const Root = styled("div", {
  background: '#293462',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center'
})
const AppContainer = styled("div", {
  maxWidth: '1280px',
  background: 'white',
  width: '100%',
  height: '100vh',
  display : "flex",
  alignItems: "center",
  justifyContents: 'center',
  padding : 20
})
const StartButton = styled('button', {
  color: '#000',
  borderRadius: '35px',
  padding: '10px 25px',
  fontWeight: 500,
  cursor: 'pointer',
  position: 'relative',
  display: 'inline-block',
  transition: 'box-shadow 300ms ease-in-out, color 300ms ease-in-out',
  '&:hover' : {
    boxShadow: '0 0 40px 40px red inset',
    color : '#fff'
  }
})

function App() {
  const [isStart, setStart] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const [isFill, setIsFill] = useState(false);

  return (
    <Root className="App">
      <AppContainer>
        <InputBox setIsFill={setIsFill}/>

        {isFill && <StartButton>START 동서남북</StartButton>}

        <DSNBBase isStart={isStart} />
        {/* TODO: 결과 나온뒤 버튼 활성화 처리. 스타일추가 */}
        {!isStart && <button onClick={handleStart} disabled={isStart}>
          START
        </button>}
        {/* <button onClick={() => setModalOpen(!modalOpen)}>열고닫기</button> */}
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && (
            <ResultModal winnerName='name' onRetry={() => setModalOpen(false)} />
          )}
        </AnimatePresence>
      </AppContainer>
    </Root>
  );
}

export default App;
