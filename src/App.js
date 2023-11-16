// import logo from './logo.svg';
import './App.css';
import Portfoliolist from './pages/Portfoliolist';

function App() {
  window.location.href = 'https://limssong.github.io/portfolio1/';
  return (
    <div className="App">
      제작중
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Portfoliolist></Portfoliolist>
    </div>
  );
}

export default App;
