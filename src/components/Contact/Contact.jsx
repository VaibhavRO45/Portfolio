import React from 'react'
import con from "../../assets/contact.png"
//import Contact from '../Contact/Contact' 
import "./Contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {
    useGSAP(()=>{
        gsap.from(".leftcontact img ",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
              trigger:".leftcontact img",
              scroll:"body",
              scrub:2,
              start:"top 80%",
              end:"top 30%"
        
            }
          })
        gsap.from("form",{
            x:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
              trigger:"form",
              scroll:"body",
              scrub:2,
              start:"top 80%",
              end:"top 30%"
        
            }
        })

    })
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="#" method='POST'>
                <input name="username" type="text" placeholder='Name' id="" />
                <input name="Email" type="email" placeholder='Email' />
                <textarea name="message" id="textarea" placeholder='message me'></textarea>
                <input type="submit" id='btn' value="Submit"/>
            </form>
        </div>
    </div>

  )
}

export default Contact