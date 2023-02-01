import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.gif";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
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
          <span style={{ color: darkMode ? "white" : "" }}>We are</span>
          <div className="ame">CW2SG Solutions</div>
          
          <span>
            IT Experts with high level of experience in Content Writing,  designing
            and development, Seo, and Grphic Designing, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">More Info</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
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
          <FloatinDiv img={crown} text1="CONTENT WRITING " text2="" />
        </motion.div>
        

        {/* animation */}
        
        
        <motion.div
          initial={{ left: "9rem", top: "1rem" }}
          whileInView={{ left: "4rem", top: "7%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="WEBSITE DEVELOPMENT" text2="" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "5rem" }}
          whileInView={{ left: "28%", top: "34%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="SEARCH ENGINE OPTIMIZATION" text2="" />
        </motion.div>
        
        <motion.div
          initial={{ top: "54%", left: "89%" }}
          whileInView={{ left: "52%", top: "60%" }}
          transition={transition}
          className="floating-div"
          
        >
          <FloatinDiv img={crown} text1="GRAPHIC DESIGN " text2="" />
        </motion.div>


        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
