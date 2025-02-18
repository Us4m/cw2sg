import React, { useContext } from "react";
import "./Intro.css";
import seo from "../../img/seo.png";
import web from "../../img/coding.png";
import glassesimoji from "../../img/glassesimoji.png";
// import cnt from "../../img/cnt.jpeg";
import cnt from "../../img/cttc.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey there!</span>
          <div className="ame"> Let’s innovate, and shape the future together!</div>
          
          <span>
          
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">More Info</button>

        </Link>
        {/* social icons */}

      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector2} alt="" /> */}
        {/* <img  src={boy} alt="" /> */}
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-30%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "0%", left: "-14%" }}
          whileInView={{ left: "2%" ,top:"-19%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={cnt}  />
        </motion.div>
        

        {/* animation */}
        
        
        {/* <motion.div
          initial={{ left: "9rem", top: "1rem" }}
          whileInView={{ left: "4rem", top: "7%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={web} text1="WEBSITE DEVELOPMENT" text2="" />
        </motion.div> */} 
        {/* <motion.div
          initial={{ left: "9rem", top: "5rem" }}
          whileInView={{ left: "28%", top: "34%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={seo} text1="SEARCH ENGINE OPTIMIZATION" text2="" />
        </motion.div> */} 
        
        {/* <motion.div
          initial={{ top: "54%", left: "89%" }}
          whileInView={{ left: "52%", top: "60%" }}
          transition={transition}
          className="floating-div"
          
        >
          <FloatinDiv img={ux} text1="GRAPHIC DESIGN " text2="" />
        </motion.div> */}


        <div
            className="blc"
            style={{ background: "var(--purple)" , width:"100px", height:"150px" , borderBottomLeftRadius: "200px" , borderTopLeftRadius: "200px", marginLeft: "590px"  }}
          ></div>
        
       
      </div>
    </div>
  );
};

export default Intro;
