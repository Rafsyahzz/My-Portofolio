import { Link } from "gatsby"

import React,{useEffect, useState} from "react"
import "./header.scss"
import LogoIcon from "./logo"
const Header = () => {
  //is open state to manage menu on smal screens
  const [isopen, setIsopen] = useState(false);
  useEffect(()=>{
    handelscrole();
  })
  //function to handel active links on while scrolling throw the section
  const handelscrole=(e)=>{
    const sections =document.querySelectorAll('section')
    const links=document.querySelectorAll(".nav_link")
   
    const options={
      threshold:0.7,
    }
    let observer=new IntersectionObserver(navChek,options)

    function navChek(entries){
      entries.forEach(entry=>{
        const sectionName=entry.target.id;
        
        if(entry.isIntersecting){
        links.forEach(link=>{
      if(link.getAttribute("data-name")===sectionName){
        link.classList.add("active")
      }else{
        link.classList.remove("active")
      }
        })
      } 

      })
    }

   sections.forEach(section=>observer.observe(section));
  };
  return(
  
  <header>
     <div className="logo">
    <Link to="/" >
   
<LogoIcon/>
      </Link>
   </div>
    <nav  className={`${isopen&&'open'}`} >
     
          <a  onClick={()=>isopen?setIsopen(!isopen):null}  className="nav_link" data-name="home" href="#home">Home</a>
       
          
      
          <a onClick={()=>isopen?setIsopen(!isopen):null}  className="nav_link" data-name="project" href="#project">Work</a>
          <a  onClick={()=>isopen?setIsopen(!isopen):null} className="nav_link" data-name="about" href="#about">About</a>
      
          <a  onClick={()=>isopen?setIsopen(!isopen):null} className="nav_link" data-name="contact" href="#contact">Contact</a>
         
    </nav>
    

     
    <button onClick={()=>{setIsopen(!isopen)}} className={`nav_btn ${isopen&&'open'}`}>
  
      
      <span></span>
      <span></span>
    
  </button>
  </header>
)

}

export default Header