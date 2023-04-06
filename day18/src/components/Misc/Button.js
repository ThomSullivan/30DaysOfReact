import { Component } from "react"

const buttonStyles = {
    padding:20,
  }

export class Button extends Component{
    render(){
      const {
        buttonName,
        onClick
      }= this.props
      return(
        <button key={ buttonName } style={buttonStyles} onClick={ onClick }>{ buttonName }</button> 
      )
    }
  }