import React from 'react'
// import './Togglebtn.css'

const SwitchTogglebtn = () => {
  return (
    <div className="switch-btn">
      <button 
        type="button" 
        className={`toggle-btn ${toggled ? "toggled" : ""}`} 
        onClick={onClick}
      >
        <div className="thumb"></div>
      </button>
    </div>
  )
}

export default SwitchTogglebtn
