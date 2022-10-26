import './assets/App.css';
import GlobalStyle from './assets/GlobalStyle';
import { Header } from './components/common/Header';
import Routes from './Routes';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Home />
        <Routes />
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
