import "./hero.scss"
import { motion } from "framer-motion"

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    }
}
const buttonAnimate={
    scrollButton:{
        opacity:0.1,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
            }
        }
    
}

const slideVar={
    initial:{
        x:0,
    },
    animate:{
        x:"-200%",
        transition:{
            repeat:Infinity,
            reapeatType:"mirror",
            duration:20,
        }
    }
}
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>GHEYATH ALRASSI</motion.h2>
                <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the recent Project</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={buttonAnimate} animate="scrollButton" src="/scroll.png" alt=""/>
            </motion.div>
        </div>
        <motion.div className="sliding" variants={slideVar} initial="initial" animate="animate">
            glad to present my first own Website 
        </motion.div>
        <div className="image">
            <img src="/rias.jpg"  alt="" className="kleiner"/>
        </div>
    </div>
  )
}

export default Hero