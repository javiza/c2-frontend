import './App.css';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Counter  from './components/common/ContadorClisks';
import { FaFacebookF,FaTwitter,FaInstagram  } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login/>
       <Register/>
       <Counter nombreContador = "FacebookF" icon ={FaFacebookF} href= 'https://www.facebook.com/'/>
       <Counter nombreContador = "Twitter" icon ={FaTwitter}/>
       <Counter nombreContador = "Instagram" icon ={FaInstagram}/>
      </header>
      <div className="App-intro">
     
    </div>
    </div>
  );
}

export default App;
