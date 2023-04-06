import { Component } from "react";

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

export class Number extends Component {
    render()  {
      
      let number = this.props.number
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
  }  