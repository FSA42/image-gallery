import React from 'react'


const ZoomedImage = ({ImgID,setImgID}) =>{
    return (
        <div className="img-container">
            <img src={`http://localhost:3000/img/${ImgID}m.jpg`} alt="broke" />
            <button onClick={()=>setImgID(null)} > Exit </button>
        </div>
    )
}

export default ZoomedImage