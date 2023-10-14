import './App.css'
import OutputComponent from './Components/OutputComponent'
import InputComponent from './Components/InputComponent'
import { useState } from 'react'

function App() {
  const[shortLink,setShortLink] = useState("");

  return (
    <div className="App">
      <h1>Link Shortener</h1>
      <InputComponent setShortLink={setShortLink}/>
      <OutputComponent shortLink={shortLink}/>
    </div>
  )
}

export default App
