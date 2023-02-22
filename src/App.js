import './App.css';
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login/>
       <Register/>
      </header>
    </div>
  );
}

export default App;
