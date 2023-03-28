import './Title.css';
import SplitText from "../SplitText.min.js";
import gsap from 'gsap';
import { useEffect } from 'react';

const Title = () => {
    useEffect(() => {
        const split = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineParent"
        });
        gsap.to(split.lines, {
            duration: .7,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
            delay: 2
        });
        const split2 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent2 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineParent"
        });
        gsap.to(split2.lines, {
            duration: .7,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
            delay: 2.1
        });
    }, []);
    return ( 
        <div className="title-stn" data-scroll-section>
            <div className="line-1">
                <div id='split-text'>front</div>
                <span id='split-text'></span>
                <div id='split-text'>end</div>
            </div>
            <div className="line-2" id='split-text2'>developer</div>
        </div>
     );
}
 
export default Title;