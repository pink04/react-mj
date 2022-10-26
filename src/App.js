import './assets/App.css';
import GlobalStyle from './assets/GlobalStyle';
import { Header } from './components/common/Header';
import Routes from './Routes';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes />
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
