import { styled } from '@stitches/react';
import {MouseEventHandler, ReactNode} from 'react';


const Modal = ({isOpen, handleModal, title, children} : {isOpen : boolean, handleModal : MouseEventHandler, title : string, children : ReactNode}) => {
  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      {isOpen ? (
        <section>
          <header>
            {title}
            <button className="close" onClick={handleModal}>
              &times;
            </button>
          </header>
          <main>{children}</main>
          <footer>
            <button className="close" onClick={handleModal}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  )
}

export default Modal;
