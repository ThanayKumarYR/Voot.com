import React from 'react'
import Bigslider from "../components/Bigslider";
import Data from '../data/Movies/Bigsliderdata.json'
const Movies = () => {
  return (
    <div>
      <Bigslider Data={Data} />
    </div>
  )
}

export default Movies
