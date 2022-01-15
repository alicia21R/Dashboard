import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {FaUser} from "react-icons/fa" ;
import '../index.css'

const fontStyles = {
  height: "100%",
  display: 'flex',
  width: "100px",
};


class Home extends Component {
  render() {
    return (
     
      <div className="container">
          <div className="icon">
            <FaUser style={fontStyles}  /> 
          </div>
        <p className="link"><Link to="/main">CLICK HERE TO START</Link></p>
          
      </div>
     

        

      


     
    );
  }
}

export default Home;
