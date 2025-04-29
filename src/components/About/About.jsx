import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/man.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"

      }
    })

    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"

      }
    })

    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"

      }
    })

    gsap.from(".aboutdetails li ",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"

      }
    })
    gsap.from(".rightabout",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"

      }
    })
  })

  return (
    <div id="about">
      <div className="leftabout">
      <div className="circle-line">
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle"></div>

      
      </div>
      <div className="aboutdetails">
        <div className="personalinfo">
          <h1> Personal Info</h1>
          <ul>
            <li>
              <span>Name:</span>  Vaibhav Gupta
            </li>
            <li>
              <span>Age:</span>  22 Years
            </li>
            <li>
              <span>Gender:</span>  MALE
            </li>
            <li>
              <span>Language Known:</span>  English, Hindi, French

            </li>

          </ul>
        </div>
        <div className="education">
          <h1> Education</h1>
          <ul>
            <li>
              <span>Degree:</span>  MCA
            </li>
            <li>
              <span>Branch:</span>  Computer Application
            </li>
            <li>
              <span>University</span>  Manipal University Jaipur
            </li>
            <li>
              <span>CGPA:</span>  9.32

            </li>
            
          </ul>
        </div>
        <div className="skills">
          <h1> Skills </h1>
          <ul>
            <li>
              WEB Developer
            </li>
            <li>
              Python Developer
            </li>
            <li>
              Python
            </li>
            <li>
              JavaScript
            </li>
            <li>
              Selenium
            </li>
            <li>
              Problem Solving Skills
            </li>
            <li>
              Project Management Skills
            </li>
          </ul>
        </div>
      </div>
            </div>

      <div className="rightabout">
        <Card title="Mern" />
        <Card title="Python"/>
        <Card title="Selenium"/>
        <Card title="Django"/>
      </div>
    </div>

  )
}

export default About