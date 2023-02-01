import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span style={{color: "rgb(0, 74, 105)"}}>
        {text1}
        
      </span>
    </div>
  );
};

export default FloatinDiv;
