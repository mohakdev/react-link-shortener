import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const OutputComponent = ({shortLink}) => {
  const[copied,setCopied] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {setCopied(false)},1000); 
    return () => clearTimeout(timer);
  },[copied]);

  return (
    <div className="output-div">
      <a className="output-link">{shortLink}</a>
      <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>        
        <button type="button" className="btn btn-primary">
          Copy
        </button>
      </CopyToClipboard>      
    </div>
  )
}

export default OutputComponent;