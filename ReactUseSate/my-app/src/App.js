
import React, {useState}from 'react';
import './App.css';

function App() {
  const [text,setText]=useState('')
 const [count,setCount]=useState(()=>{
  
  return 4
 })
  function decrementCount() {
    const tempCount=count-1;
    if (tempCount<5) {
      setText('Lower than 5')
    }
    else{
      setText('')
    }
    setCount(prevCount=>prevCount-1);
  }
  function inicializeCount() {
    const tempCount=count+1;
    if (tempCount>5) {
      setText('Uper than 5')
    }else{
      setText('')
    }
    
    setCount(prevCount=>prevCount+1);
  }

  return (
  <>
  <button stype="button" className="btn" onClick={decrementCount}>-</button>
  <span>{text}  Number:{count}</span>
  <button stype="button" className="btn" onClick={inicializeCount}>+</button>
  </>
  )
}

export default App;
