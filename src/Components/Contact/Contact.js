import './Contact.css';
import gif from '../../Images/batman.gif'

const Contact = () => {
    return ( 
        <div className="contact-stn">
            <div className="hello">hello!</div>
            <div className="body">
                <div>contact</div>
                <div>me</div>
                <div className="gif-wrapper">
                    <img src={gif} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Contact;