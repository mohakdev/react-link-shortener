import axios from 'axios';
import React, { useState } from 'react'

const InputComponent = ({ setShortLink }) => {
  const [textBoxValue, setTextBoxValue] = useState("");
  const apiKey = import.meta.env.VITE_REBRANDY_KEY;

  const headers = {
    "Content-Type": "application/json",
    "apikey": apiKey
  }

  const handleShortenLink = async () => {
    let endpoint = "https://api.rebrandly.com/v1/links";
    let linkRequest = {
      destination: textBoxValue,
      domain: { fullName: "rebrand.ly" }
      //, slashtag: "A_NEW_SLASHTAG"
      //, title: "Rebrandly YouTube channel"
    }
    const apiCall = {
      method: 'post',
      url: endpoint,
      data: linkRequest,
      headers: headers
    }
    let apiResponse = await axios(apiCall);
    let link = apiResponse.data;
    setShortLink(link.shortUrl);
    // save both original + short to localStorage
    saveUrl(textBoxValue, link.shortUrl);
  }


  return (
    <div className="input-div">
      <input
        className="form-control"
        type="text"
        placeholder="Paste a link to shorten"
        value={textBoxValue}
        onChange={e => setTextBoxValue(e.target.value)}></input>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleShortenLink}>SHORTEN</button>
    </div>
  )
}

export default InputComponent