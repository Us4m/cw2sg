import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { themeContext } from "../../Context";
const Contact = () => {
  const notify = () => toast("Message Sent Sucessfully !");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c5wpc5m', 'template_v32hk02', form.current, 'QuxLjFHs6UIqU5mw-')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <div className="dds"> Get in <span>Touch</span>   </div>
          
          <div
            className="blc"
            style={{ background: "#ABF1FF94" , width:"100px", height:"150px" , borderBottomRightRadius: "100px" , borderTopRightRadius: "100px", marginLeft: "-130px"  ,marginTop:"-270px" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input onClick={notify} type="submit" value="Send" className="button"/>
          <ToastContainer />
          <div className="msg">{done && "Thanks for Contacting CW2SG Our Company Will Contact Soon !"}</div>
          {/* <div
            className="blur c-blur1"
            
          ></div> */}
        </form>
        <div
            className="blc"
            style={{ background: "var(--purple)" , width:"150px", height:"150px"  ,marginTop:" 370px", zIndex:"-1" , borderRadius:"190px" }}
          ></div>
      </div>
      
    </div>
  );
};

export default Contact;
