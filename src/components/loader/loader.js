import React,{useEffect} from 'react'
import "./loader.scss";
import {slider} from "../../utiles/utiles"
import SEO from '../seo';

function Loader() {
  useEffect(() => {
    
    slider()
  
  }, [])
  
    return (
      <>
<SEO title="RIFSZZ"/>
      <div className="wrapper">
   <div className="text_container">
     <h1 className="slider_text">Rafii Syahbani</h1>
     <span className="slider"></span>
</div>
    </div></>
    )
}

export default Loader
