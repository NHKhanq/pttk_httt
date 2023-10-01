import './App.scss'
import Header from './components/Header';
import Content from './components/Content';
import Container from 'react-bootstrap/Container';
import { Modal } from 'bootstrap';
import ModalsAdd from './components/ModalsAdd';
import { useState } from 'react';




function App() {
  const [showModals, setShowModals]= useState(false) 
  const handleClose = () => {
    setShowModals(false)
   }
  return (
 <div className='app-container'>
    <Header />
    <Container>
      <div className='list'>
    <>List user:</>
    <button className='btn-add' onClick={() => setShowModals(true)}>
            ADD
          </button>
      </div>
        <Content />
        <ModalsAdd 
          
          shows = {showModals}
         handleClose = {handleClose}
       
        />
    </Container>
 </div>
  );
}

export default App;
