import React from 'react'
import Data from '../data/Sports/Bigsliderdata.json'
import { lazyLoad } from "../lazyload";
const Bigslider = lazyLoad("./components/Bigslider.jsx");
const Sports = () => {
  return (
    <div>
      <Bigslider Data={Data}/>
    </div>
  )
}

export default Sports
