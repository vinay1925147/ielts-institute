import "./Contract.css";
import Form from "./Form";
import msg from '../../assets/msg-icon.png';
import phone from '../../assets/phone-icon.png';
import location from '../../assets/location-icon.png';
import mail from '../../assets/mail-icon.png';
import insta from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twittwer from '../../assets/twitter.png'
function Contract() {
  return (
    <div className="contract">
      <div className="user-contract">
        <h3>Send us a Message <img src={msg} alt="" /></h3>
        <p>
          
        </p>
        <ul>
          <li><img src={mail} alt="" className="" /> contact@ieltsmastery.com </li>
          <li><img src={phone} alt="" />+91-98765 43210 </li>
          <li> <img src={location} alt="" />  New Delhi, India<br/></li>
        </ul>

         <div style={{marginTop:"20px"}}>
          <h3>Quick Links</h3>
          <ul  className="social-link">
            <li><a href="https://www.facebook.com/idpieltsindia" ><img src={facebook} alt="" className="facebook" /></a></li>
            <li><a href="https://www.instagram.com/ieltsidpindia/" ><img src={insta} alt="" className="insta"/></a></li>
            <li><a href="https://x.com/ieltsidpindia" ><img src={twittwer} alt="" className="twitter"/></a></li>
          </ul>
        </div>
        
      </div>
      <div className="user-contract">
        <Form />
      </div>
    </div>
  );
}

export default Contract;
