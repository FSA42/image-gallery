import { useState } from 'react'

import Gallery from "./Gallery"
import ZoomedImage from './ZoomedImage'

const App = () => {
  const [ ImgID, setImgID ] = useState( null )

  console.log( ImgID )
  return (  
    <div className="App">
      <ZoomedImage {...setImgID} />
      <Gallery {...ImgID}  />      
    </div>
  )
}

export default App
