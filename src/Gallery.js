import React, { useState } from 'react'

const Gallery = ({setImgID}) =>{
    const [ selected, setSelected ] = useState( 1 )

    const handleSubmit = e =>{
        e.preventDefault()
        alert(`Wybrano ${ selected }`)
    }
    return(
    <>
    <section className="Gallery">
        {
            Array(9).fill("")
                .map( (_,index) => <img src={`http://localhost:3000/img/${index+1}m.jpg`} alt="broke" key={index}
                onClick={ ()=> setImgID(index+1) } />
                )
        }
    </section>
    <form onSubmit={ e => handleSubmit(e) }>
        <label htmlFor="fav"> ulubione zdjęcie:
            <select name="fav" id="fav" 
            onChange={ e => setSelected(e.target.value) } 
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </label>
            <input type="submit" value="wyślij" />
    </form>
    </>
    )
}

export default Gallery 