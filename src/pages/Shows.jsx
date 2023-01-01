import React from 'react'
import Bigslider from "../components/Bigslider";
import Data from '../data/Shows/Bigsliderdata.json'
const Shows = () => {
  return (
    <div>
      <Bigslider Data={Data} />
    </div>
  )
}

export default Shows
