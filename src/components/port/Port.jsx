import "./port.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import {useRef} from 'react'

const items=[
    {
    id:1,
    title:" Website with HTML, CSS and JavaScript",
    img:"./../../../public/Port4.mp4",
    desc:"The video is showing a Demo of my Portfolio Website which i built",
},
{
    id:2,
    title:"A Website using TypeScript and React",
    img:"./../../../public/CS1.png",
    desc:"In the current Project I'm using TypeScript and React to build a Website"
}
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300,300]);

    // Check if the item is a video based on its file extension
    const isVideo = item.img.endsWith('.mp4');

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        {isVideo ? (
                            <video controls width="100%" id="videoFrame">
                                <source src={item.img} type="video/mp4" />
                                Sorry, your browser does not support embedded videos.
                            </video>
                        ) : (
                            <img src={item.img} alt={item.title} />
                        )}
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Port= () => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref, offset:["end end", "start start"]});
    const scaleX=useSpring(scrollYProgress,{
        stiffness:20,
        damping:30,
    })
    return(
    <div className="port" ref={ref}>
        <div className="progress">
            <h1> Featured Works </h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(<Single item={item} key={item.id} />))}
    </div>
    );
};
export default Port;