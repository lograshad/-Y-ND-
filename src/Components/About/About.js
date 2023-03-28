import './About.css';
import { useEffect, useRef, useState } from 'react';
import SplitText from "../SplitText.min.js";
import gsap from 'gsap';
import cn from "classnames";
import useOnScreen from '../../Hooks/useOnScreen';

const About = () => {

    const ref = useRef(null);
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);
    useEffect(() => {
      if (onScreen) setReveal(onScreen);
    }, [onScreen])
    
    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#about-stn", {
                type: "lines",
            });
    
            gsap.to(split.lines, {
                duration: 1,
                y: -200,
                opacity: 1,
                stagger: 0.05,
                ease: "power4.out",
                // onComplete: () => split.revert(),
            });
        }
    }, [reveal]);
    return ( 
        <div className={cn("about-stn")} data-scroll-section>
            <div className={cn("body", {'is-reveal': reveal})} ref={ref} id='about-stn'>
                I'm a Front End developer, focused on delighting clients with innovative, user-friendly designs. I use my knowledge and abilities to support forward thinking development teams. I also protect the city of gotham in my free time.
            </div>
        </div>
     );
}
 
export default About;