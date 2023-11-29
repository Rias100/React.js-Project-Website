import "./sP.scss"
import { useRef } from "react"
import {motion, useScroll, useTransform} from "framer-motion"

const SP = ({type}) => {

  const ref=useRef()

  const {scrollYProgress} =useScroll({
    target:ref,
    offset:["start start", "end start"]

  })

  const yBg=useTransform(scrollYProgress,[0,1], ["-10%", "100%"])
  const yText=useTransform(scrollYProgress,[0,1], ["0%", "100%"])

  return (
    <div className="sP"
    ref={ref}
    style={{background:type==="services" ? "linear-gradient(180deg,#000000,#1F4E78)" 
    : "linear-gradient(180deg,#1F4E78,white)"}}>

      <motion.h1 style={{y:yText}}>{type==="services" ? "Projects" : "New Projects"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}
export default SP     