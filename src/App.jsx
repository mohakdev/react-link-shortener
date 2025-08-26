import './App.css'
import OutputComponent from './Components/OutputComponent'
import InputComponent from './Components/InputComponent'
import { useState } from 'react'
import List from './Components/List';

function App() {
  const [shortLink, setShortLink] = useState("");
  const [urls, setUrls] = useState([])

  // Load urls from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urls")) || []
    setUrls(stored)
  }, [])

  // Function to save new shortened URL
  function saveUrl(originalUrl, shortenedUrl) {
    const updated = [...urls, { original: originalUrl, short: shortenedUrl }]
    setUrls(updated)
    localStorage.setItem("urls", JSON.stringify(updated))
  }

  return (
    <div className="App">
      <h1>Link Shortener</h1>
      <InputComponent setShortLink={setShortLink} saveUrl={saveUrl} />
      <OutputComponent shortLink={shortLink} />
      <List urls={urls} />
    </div>
  )
}

export default App
