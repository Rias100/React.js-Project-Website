import {motion} from "framer-motion"
import "./test.scss"

function Test() {

    const variants={
        visible:{opacity:1},
        hidden:{opacity:0},
    }
    return (
        <div className="course">
            <motion.div className="box" 
            initial={{opacity:0, scale: 0.5}}
            animate={{opacity:1, scale: 1}}
            whileInView={{opacity:1, scale:2}}
            transition={{duration:3, delay: 0}}
            drag
            ></motion.div>
        </div>
    )
}

export default Test
