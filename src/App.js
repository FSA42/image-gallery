import { useState } from 'react'

import Gallery from "./Gallery"

const App = () => {
  const [ ImgID, setImgID ] = useState( null )

  console.log( ImgID )
  return (  
    <div className="App">
      <Gallery   />      
    </div>
  )
}

export default App
