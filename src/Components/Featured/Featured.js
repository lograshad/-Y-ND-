// import img1 from '../../Images/img1.PNG';
// import img2 from '../../Images/img2.PNG';
// import img3 from '../../Images/img3.PNG';
// import Gallery from '../Gallery/Gallery';
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import './Featured.css';

// const Images = [
//     {
//         src: img1,
//         title: "img1",
//         desc: "description",
//         techs: "react / gsap"
//     },
//     {
//         src: img2,
//         title: "img2",
//         desc: "description",
//         techs: "react / gsap"
//     },
//     {
//         src: img3,
//         title: "img3",
//         desc: "description",
//         techs: "react / gsap"
//     }
// ]

// const Featured = () => {
//     const [ActiveImage, setActiveImage] = useState(1);

//   const ref = useRef(null);

//   useEffect(() => {
//     // This does not seem to work without a settimeout
//     setTimeout(() => {
//     //   console.log(ref.current.offsetWidth);
//     //   console.log(ref.current.clientWidth);
//     //   console.log({ current: ref.current });
//       let sections = gsap.utils.toArray(".gallery-stn");

//       gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           start: "top top",
//           trigger: ref.current,
//           scroller: "#main-container",
//           pin: true,
//           scrub: 0.5,
//           snap: 1 / (sections.length - 1),
//           end: () => `+=${ref.current.offsetWidth}`,
//         },
//       });
//       ScrollTrigger.refresh();
//     });
//   }, []);
//     return ( 
//         <div className="featured-stn" data-scroll-section>
//             <div className="featured-wrapper" ref={ref}>
//                 <div className="gallery-counter">
//                     <div>{ActiveImage}</div>
//                     <span></span>
//                     <div>{Images.length}</div>
//                 </div>
//                 {Images.map((image, index) => (
//                     <Gallery
//                         key={image.src}
//                         index={index}
//                         {...image}
//                         updateActiveImage={(index)=>(setActiveImage(index + 1))}
//                     />
//                 ))}
//             </div>
//         </div>
//      );
// }
 
// export default Featured;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from '../../Hooks/useOnScreen';
import cn from "classnames";

import "./Featured.css";

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">

      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}