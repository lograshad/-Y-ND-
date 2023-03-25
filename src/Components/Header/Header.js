import './Header.css';

const Header = ({ Link, updateLink, updateLeave }) => {
    console.log(Link);
    return ( 
        <div className="header-stn" data-scroll-section>
            <ul>
                <li className='' onMouseOver={updateLink} onMouseLeave={updateLeave}>
                    {/* profile links here */}
                    something
                </li>
                <li>
                    abdulrasheed Ìyàndá
                </li>
                <li>2023 portfolio</li>
            </ul>
        </div>
     );
}
 
export default Header;