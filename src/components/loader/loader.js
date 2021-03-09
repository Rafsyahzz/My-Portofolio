import React,{useEffect} from 'react'
import "./loader.scss";
import {slider} from "../../utiles/utiles"

function Loader() {
  useEffect(() => {
    
    slider()
  
  }, [slider])
  
    return (
      <div className="wrapper">
   <div className="text_container">
     <h1 className="slider_text">Meryem Barroug</h1>
     <span className="slider"></span>
</div>
    </div>
    )
}

export default Loader
