import './Gallery.css';

const Gallery = ({index, src, title, desc, techs, updateActiveImage }) => {
    return ( 
        <div className="gallery-stn">
            <div className="gallery-wrapper">
                <div className="image-tile">
                    <div className='image-wrapper'>
                        <img src={src} alt="" />
                    </div>
                    <div className="description">
                        <div>{title}</div>
                        <div>{desc}</div>
                        <div>{techs}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;