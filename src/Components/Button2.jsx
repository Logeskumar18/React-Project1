import React from 'react'

const Button2 = (probs) => {
    return (
        <button type="button" style={{background: "#192636"}} className="btn border rounded-2 text-white h-50 fw-bolder">{probs.name}</button>
    )
}

export default Button2