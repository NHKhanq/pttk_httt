import './App.scss'
import Header from './components/Header';
import Content from './components/Content';
import Container from 'react-bootstrap/Container';




function App() {
  return (
 <div className='app-container'>
    <Header />
    <Container>
        <Content />
    </Container>
 </div>
  );
}

export default App;
