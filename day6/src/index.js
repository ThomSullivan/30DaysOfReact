import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CanvasJSReact from './canvasjs.react.js';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const numList = [...Array(100).keys()]
const colorsList = numList.map((e)=>{
  return hexaColor()
})




const numBoxStyles = {
  fontSize :'50pt',
  display :'inline-block',
  width : 100,
  color : 'white',
  margin : 1,
  textAlign: 'center',
  padding:20
}
const primeStyles = {
  backgroundColor : 'red',
}
const evenStyles = {
  backgroundColor :'green',
}
const oddStyles = {
  backgroundColor :'orange',
}

const hexaColorBox = {
  fontSize :'large',
  display :'inline-block',
  width : 100,
  color : 'white',
  margin : 1,
  textAlign: 'center',
  padding:'50px 20px 50px 20px',
  borderRadius:'5%'
}

const Number = ({number}) =>{
  let numStyle = undefined
  if (number === 2 || number === 3 || number === 5 || number === 7){
      numStyle = primeStyles
    }else if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0){
      numStyle = primeStyles
    } else if (number % 2 === 0){
      numStyle = evenStyles
    } else {
      numStyle = oddStyles
    }
  return(
    <div style={Object.assign({},numBoxStyles,numStyle)}>
        {number}
    </div>
  )
}   
const Numbers = ({numbers}) =>{
  const numDivList = numbers.map((number)=>(
    <Number key={number} number={number} />
  ))
  return <div>
    <h1>Number Generator</h1>
    {numDivList}
    </div>
}   



const Color = ({color}) =>{
  return (
  <div style={Object.assign({},hexaColorBox,{backgroundColor:color})}>
    {color}
  </div>
  )
}

const Colors = ({colors}) =>{
  const colorsList = colors.map((color)=>(
    <Color key={color}color={color} />
  )) 
  return(
    <div>
      <h1>Hexadecimal Colors</h1>
      {colorsList}
    </div>
  )
}


class Graph extends Component {	
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
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}



const App = () => (
  
    <div>
      
      <Numbers numbers={numList} />
      <Colors colors={colorsList} />
      <Graph />
    </div>
  
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)