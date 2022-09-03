import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const state = useSelector(state => state);

  useEffect(()=>{
    console.log(state)
  },[state])

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
