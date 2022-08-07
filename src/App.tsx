import { useState } from 'react';
import './App.css';
import ResultModal from './components/ResultModal/ResultModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='App'>
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
