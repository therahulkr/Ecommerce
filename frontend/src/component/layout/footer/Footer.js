import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="details">

    <div className="number"> 
        <div className="logo "><img src={require("../images/Profile.png")}/></div>

        <div id="inner">
        <h1>Contact Details</h1>
            <ol>
                <li>Rahul Kumar</li>
                <li>Contact number:8178595005</li>
                <li>Instagram : @therahul_kr</li>
            </ol>
        </div>
        
    </div>

    <div id="icon">
                <img src={require('../images/whitapp/fblogo.jpeg')}/>
                <img src={require('../images/whitapp/instalogo.jpeg')}/>
                <img src={require('../images/whitapp/ytubelogo.jpeg')}/>
                <img src={require('../images/whitapp/twitter.jpeg')}/>
                <a href="#join"><img id="waimg" src={require('../images/whitapp/wa.jpeg')}/></a>

    </div>
    

</footer>
  );
};

export default Footer;
