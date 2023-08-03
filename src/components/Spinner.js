import React from 'react'
import './Spinner.css'; 

function Spinner() {
  return (
    <div>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <p>Loading.....</p>
    </div>
  )
}

export default Spinner; 