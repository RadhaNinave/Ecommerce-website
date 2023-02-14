import React from "react";
import img from '../../assets/y.png'
import img2 from '../../assets/s.jpeg'
import img3 from '../../assets/f.png'
import "./footer.css";

   

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-title">
           <h1>The Generics</h1> 
        </div>
        <div className="footer-icons">
            <ul>
                <li><a href="https://www.youtube.com">
                    <img classname=" img"src={img} alt="" />
                </a></li>
                <li ><a href="https://spotify.com" >
                    <img  className="img"src={img2} alt=""/>
                </a></li>
                <li ><a href="https://facebook.com">
                    <img className="img" src={img3} alt="" />
                </a></li>
            </ul>
        </div>
    </footer>


      

    
  );
};
export default Footer;
