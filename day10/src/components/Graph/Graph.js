import { Component } from "react";
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export class Graph extends Component {	
  render() {
    const options = {
      title: {
        text: "World Population"
      },
      data: [{				
                type: "bar",
                dataPoints: [
                  { label: 'Japan', y: 126960000 },
                  { label: 'Russian Federation', y: 146599183 },
                  { label: 'Bangladesh', y: 161006790 },
                  { label: 'Nigeria', y: 186988000 },
                  { label: 'Pakistan', y: 194125062 },
                  { label: 'Brazil', y: 206135893 },
                  { label: 'Indonesia', y: 258705000 },
                  { label: 'United States of America', y: 323947000 },
                  { label: 'India', y: 1295210000 },
                  { label: 'China', y: 1377422166 },
                  
                ]
       }]
   }
    
   return (
      <div>
        <CanvasJSChart options = {options}/>
      </div>
    );
  }
}
