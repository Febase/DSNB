import { useState } from 'react';
import './App.css'
import DSNBBase from './components/DSNBBase'

function App() {
  const [isStart, setStart] = useState<boolean>(false);

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
    </div>
  )
}

export default App
