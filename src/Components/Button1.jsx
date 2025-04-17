import React from 'react'

export const Button1 = (probs) => {
  return (
    <button 
      type="button"  
      onClick={probs.onClick} // ⭐ Added onClick here
      style={{ backgroundColor: "#4d51f6" }} 
      className="btn rounded-2 text-white h-50 mx-3 fw-bolder"
    >
      {probs.name}
    </button>
  )
}
