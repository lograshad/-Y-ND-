// import './Gallery.css';
// import { useRef, useEffect } from 'react';
// import useOnScreen from '../../Hooks/useOnScreen';
// import cn from "classnames";

// const Gallery = ({
//     index,
//     src,
//     title,
//     desc,
//     techs,
//     updateActiveImage
// }) => {
//     const ref = useRef(null);

//     const onScreen = useOnScreen(ref, 0.5);

//     useEffect(() => {
//         if (onScreen) {
//             updateActiveImage(index);
//         }
//     }, [onScreen, index]);
//     return (
//         <div className={cn("gallery-stn", { "is-reveal": onScreen })}
//             ref={ref}>
//             <div className="gallery-wrapper">
//                 <div className="image-tile">
//                     <div className='image-wrapper'>
//                         <img src={src} alt="" />
//                     </div>
//                     <div className="description">
//                         <div>{title}</div>
//                         <div>{desc}</div>
//                         <div>{techs}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Gallery;