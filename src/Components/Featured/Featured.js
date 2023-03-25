import img1 from '../../Images/img1.PNG';
import img2 from '../../Images/img2.PNG';
import img3 from '../../Images/img3.PNG';
import Gallery from '../Gallery/Gallery';
import { useState } from 'react';
import './Featured.css';

const Images = [
    {
        src: img1,
        title: "img1",
        desc: "description",
        techs: "react / gsap"
    },
    {
        src: img2,
        title: "img2",
        desc: "description",
        techs: "react / gsap"
    },
    {
        src: img3,
        title: "img3",
        desc: "description",
        techs: "react / gsap"
    }
]

const Featured = () => {
    const [ActiveImage, setActiveImage] = useState(1)
    return ( 
        <div className="featured-stn" data-scroll-section>
            <div className="featured-wrapper">
                <div className="gallery-counter">
                    <div>{ActiveImage}</div>
                    <span></span>
                    <div>{Images.length}</div>
                </div>
                {Images.map((image, index) => (
                    <Gallery
                        key={image.src}
                        index={index}
                        {...image}
                        updateActiveImage={(index)=>(setActiveImage(index + 1))}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Featured;