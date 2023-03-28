import './Contact.css';
import gif from '../../Images/batman.gif';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import SplitText from "../SplitText.min.js";
import cn from "classnames";
import useOnScreen from '../../Hooks/useOnScreen';

const Contact = () => {
    const ref = useRef(null);
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);
    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen])
    useEffect(() => {
        if (reveal) {
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
                delay: 1
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
                delay: 1
            });
        }
    }, [reveal]);
    return (
        <div className="contact-stn" data-scroll-section>
            <div className="hello">hello!</div>
            <div className={cn("bod", {'is-reveal': reveal})} data-scroll>
                <div id='split-text'>contact</div>
                <div id='split-text2' ref={ref}>me</div>
                <div className="gif-wrapper">
                    <img src={gif} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Contact;