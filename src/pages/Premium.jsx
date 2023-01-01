import React from 'react'
import Bigslider from "../components/Bigslider";
import Data from '../data/Premium/Bigsliderdata.json'
const Premium = () => {
  return (
    <div>
      <Bigslider Data={Data} />
    </div>
  )
}

export default Premium
