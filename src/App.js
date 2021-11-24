import { useState } from 'react'

import Gallery from "./Gallery"
import ZoomedImage from './ZoomedImage'

const App = () => {
  const [ ImgID, setImgID ] = useState( null )

  console.log( ImgID )
  return (  
    <div className="App">
      <Gallery  setImgID = {setImgID}  />      
      <ZoomedImage setImgID = {setImgID}  ImgID={ImgID} />
    </div>
  )
}

export default App
