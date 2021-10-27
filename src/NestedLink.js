import React, { useState } from 'react'

const NestedLink = () =>{
    const [ wasToggleClicked, setWasToggleClicked ] 
        = useState(false)

    const handleToggleClick = () => 
        setWasToggleClicked( wasToggleClicked )

    return(
        <div className="NestedLink">
            <p className="main-link">
                <a href="/#">Main</a>
                <button
                    onClick={()=> handleToggleClick() }
                >
                    T
                </button>
            </p>
            {
                wasToggleClicked &&
                <ul className="sub-links">
                    <li><a href="/1">link1</a></li>
                    <li><a href="/2">link2</a></li>
                    <li><a href="/3">link3</a></li>
                    <li><a href="/4">link4</a></li>
                </ul>
            }
        </div>
    )
}

export default NestedLink