import {useState} from 'react'
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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(state => !state)
  }

  return (
    <Root className="App">
      <AppContainer>
        <InputBox />

        <div>

        </div>
      </AppContainer>
      {/*<button onClick={handleModal}>모달팝업</button>*/}

      {/*<Modal isOpen={isModalOpen} handleModal={handleModal} title={'동서남북 안내문'}>*/}
      {/*  <div>modal</div>*/}
      {/*</Modal>*/}
    </Root>
  )
}

export default App
