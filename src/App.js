import React from 'react'
import './App.css';
import Navbar, {Alt_Navbar} from "./components/navbar";
import Gövde from "./components/body"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Alt_Navbar/>
      <Gövde/>
      
    </div>
  );
}

export default App;
