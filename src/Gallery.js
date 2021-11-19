import React from 'react'

const Gallery = () =>{
    // console.log( onImgClick )


    return(
    <section className="Gallery">
       
        {
            Array(9).fill("")
                .map( (_,index) => <img src={`http://localhost:3000/img/${index+1}s.jpg`} />
                )
        }
 

    </section>
    )
}

export default Gallery 