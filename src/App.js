import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import myContext from './Components/Context';
import Navbar from './Components/Navbar';

function App() {
  const [login, setLogin] = useState(false)
  const [input, setInput] = useState("")

 
  return (
    <myContext.Provider value={{setLogin , setInput , input}}>

      <div className="App">
        {
          login === true ? <><Navbar/> <Home /> </>: <Login />
        }
      </div>
    </myContext.Provider>
  );
}

export default App;
