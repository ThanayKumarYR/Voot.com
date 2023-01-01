import React from 'react'
import Bigslider from "../components/Bigslider";
import Data from '../data/Kids/Bigsliderdata.json'
const Kids = () => {
  return (
    <div>
      <Bigslider Data={Data} />
    </div>
  )
}

export default Kids