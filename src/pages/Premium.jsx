import React from 'react'
import Data from '../data/Premium/Bigsliderdata.json'
import Bigslider from "../components/Bigslider.jsx"

// import { lazyLoad } from "../lazyload";
// const Bigslider = lazyLoad("./components/Bigslider.jsx");
const Premium = () => {
  return (
    <div>
      <Bigslider Data={Data} />
    </div>
  )
}

export default Premium