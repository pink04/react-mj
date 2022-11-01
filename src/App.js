import './assets/App.css';
import { Header } from './components/Header';
import Routes from './Routes';
import { ReactQueryDevtools } from 'react-query/devtools';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Container className="App" fixed>
        <Header />
        <Routes />
      </Container>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
