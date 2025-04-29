import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
//import TypingEffect from "react-typing-effect";
import { Typewriter } from 'react-simple-typewriter';
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'


function Home() {

  useGSAP(()=>{
    let tl1 = gsap.timeline()
    tl1.from(".line1",{
       y:80,
       duration:1,
       opacity:0
    })
    tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
   })
   tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
 })

 gsap.from(".righthome img",{
  x:200,
  duration:1,
  opacity:0
 })
    
    })  


  return (
    <div id="home">
        
        <div className="lefthome">
        <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">Vaibhav Gupta</div>
            <div className="line3">
              <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "EDITOR","PYTHON DEVELOPER"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={20}
              delaySpeed={1000}
              t
             /> 
            </div>
            <button>Hire ME</button>
            <a href="https://www.linkedin.com/in/vaibhav-gupta-4b20b0258" target="_blank" rel="noopener noreferrer">
  <button>LinkedIn</button>
</a>
<a href="https://github.com/VaibhavRO45" target="_blank" rel="noopener noreferrer">
  <button>GitHub</button>
</a>
            
        </div>
        </div>
        <div className="righthome">
            <img src={man} alt="" />
        </div>
        </div>
  )
}

export default Home