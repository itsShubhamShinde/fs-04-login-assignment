import { useContext } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import {myContext} from './Components/DataProvider';
import Navbar from './Components/Navbar';


function App() {
  const { login } = useContext(myContext)
 
  return (
      <div className="App">
        {
          login === true ? <><Navbar/> <Home /> </>: <Login />
        }
      </div>
  );
}

export default App;
