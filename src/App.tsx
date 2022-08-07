import {useEffect, useState} from 'react'
import './App.css'
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(state => !state)
  }

  const [isFill, setIsFill] = useState(false);

  return (
    <Root className="App">
      <AppContainer>
        <InputBox setIsFill={setIsFill}/>

        {isFill && <StartButton>START 동서남북</StartButton>}
      </AppContainer>
      {/*<button onClick={handleModal}>모달팝업</button>*/}

      {/*<Modal isOpen={isModalOpen} handleModal={handleModal} title={'동서남북 안내문'}>*/}
      {/*  <div>modal</div>*/}
      {/*</Modal>*/}
    </Root>
  )
}

export default App
