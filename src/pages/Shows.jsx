import React from 'react'
import Data from '../data/Shows/Bigsliderdata.json'
import { lazyLoad } from "../lazyload";
const Bigslider = lazyLoad("./components/Bigslider.jsx");
const Shows = () => {
  return (
    <div>
      <Bigslider Data={Data} />
    </div>
  )
}

export default Shows
