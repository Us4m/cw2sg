import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
       <div className="bl" style={{  }}>About Me</div>
          </span><span></span>
          
          <spane>
          I’m a Cloud Engineer and Backend Python Developer with a passion for solving <br />
          complex problems using AI and cloud technologies. I thrive on building scalable, <br />
          secure, and cost-effective cloud infrastructures and applications. My journey has <br />
          led me to work with technologies like OpenAI LLM models, Generative AI, and <br />
          speech-to-text models. When I'm not coding, I'm exploring the latest trends in <br />
          cloud computing, DevOps, and AI to stay ahead of the curve.
          </spane>
         <div className="bttr">
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact Us</button>
          </Link>
          </div>
          <div
            className="blc"
            style={{ background: "#ABF1FF94" , width:"100px", height:"150px" , borderBottomRightRadius: "100px" , borderTopRightRadius: "100px", marginLeft: "-130px"  ,marginTop:"-270px" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
