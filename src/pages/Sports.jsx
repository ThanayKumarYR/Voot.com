import React from 'react'
import Bigslider from "../components/Bigslider";
import Data from '../data/Sports/Bigsliderdata.json'
const Sports = () => {
  return (
    <div>
      <Bigslider Data={Data}/>
    </div>
  )
}

export default Sports
