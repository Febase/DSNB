import { useState } from 'react';
import './App.css'
import DSNBBase from './components/DSNBBase'
import ResultModal from './components/ResultModal/ResultModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isStart, setStart] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
