import React, { Component } from "react";
import {FaUser} from "react-icons/fa" ;
import '../index.css'
// import { IconCards } from "../components";
const fontStyles = {
  height: "100%",
  display: 'flex',
  width: "100px",
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appear: false,
      arrayInput:"",
      result: []
    };  
   this.EntryAppear = this.EntryAppear.bind(this);
   this.Mutater = this.Mutater.bind(this);
  }

  EntryAppear = ()=> {
   this.setState({
     appear:true
   });
  }
  Mutater = () => {
    if(this.state.arrayInput === ""){
      alert("enter values")
      return
    }
    const splitedArray = this.state.arrayInput.split(",");
    var b = []
    for(var n=0; n <= (splitedArray.length-1); n++){
      if(n == 0){
        b[n]= 0+ Number(splitedArray[n]) + Number(splitedArray[n+1])
      } else if(n == (splitedArray.length-1)){
        b[n]= Number(splitedArray[n-1]) + Number(splitedArray[n] )+0
      } else{
        b[n]= Number(splitedArray[n-1]) + Number(splitedArray[n]) +Number(splitedArray[n+1])
      }
    }
    this.setState({
      result:b
    })
  
  }

  render() {
    return (
      <div className="TopContainer" >
      <div className="container-main">
        <div className="icon" onClick = {this.EntryAppear} >
        <FaUser style={fontStyles}  /> 
        </div>
        <div className="icon">
        <FaUser style={fontStyles}  /> 
        </div>
        <div className="icon">
        <FaUser style={fontStyles}  /> 
        </div>
      </div>
      { this.state.appear === true&& (
      <div className="HiddenSection">
        <p>  Enter array of numbers with commas</p>
        <input
         className="Input"
         placeholder="0,0,0,0"
         name={this.state.arrayInput}
         value={this.state.arrayInput}
         onChange={(e)=>{
           this.setState({
             arrayInput:e.target.value
           })
         }}
        />
       <button onClick={this.Mutater} >
         mutate
       </button>
      </div>)
     }
     {
       this.state.result.length >0  &&(
         <p>Mutated array is: {this.state.result}</p>
       )
     }
      </div>
    );
  }
}

export default Main;



