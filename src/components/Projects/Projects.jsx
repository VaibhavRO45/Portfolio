import React from 'react'
import "./Projects.css"
import Card from '../Card/Card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  useGSAP(()=>{
    gsap.from(".projects h1",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".projects h1",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
  
      }
    })
    gsap.from(".slider ",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
  
      }
    })
  })
  return (
    <div className="projects" id="#para">
        <h1>1+ Years Experience in Projects</h1>
        <div className="slider">
            <Card title={"Virtul Assistant"}/>
            <Card title={"Stock Price Prediction"}/>
            <Card title={"Craft Heaven – E-commerce Website"}/>
            <Card title={"Login Page in Python using Django"}/>
            <Card title={"Chat App Django"}/>
        </div>
    </div>
  )
}

export default Projects