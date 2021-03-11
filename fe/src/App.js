import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          자바스크립트가 곧 본질이다. 리액트는 흘러가는 바람일 뿐....
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          헬로우 리액트
        </a>
      </header>
    </div>
  );
}

export default App;
