import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter] = useState(0)


  const AddValue=()=>{
    console.log("clicked",counter)
    if(counter<20){
      counter=counter+1
      setCounter(counter)
    }
 }
 const RemoveTask=()=>{
  if(counter>0){
    counter=counter-1
    setCounter(counter)
  }
}

  return (
   <>
   <h2>counter value{counter}</h2>
   <button onClick={AddValue}> Add task{counter}</button>
   <br /><br />
   <button onClick={RemoveTask}>Remove task</button>
   </>
  )
}

export default App
