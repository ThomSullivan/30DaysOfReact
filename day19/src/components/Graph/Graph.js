import { Component } from "react";
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export class Graph extends Component {	
  
  render() {
    const {
      name, 
      data 
    } = this.props
    console.log(data)
    const options = {
      title: {
        text: name
      },
      data: [{				
                type: "bar",
                dataPoints: [...data]
       }]
   }
   
   return (
      <div>
        <CanvasJSChart options = {options}/>
      </div>
    );
  }
}
