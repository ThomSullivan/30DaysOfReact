import { Component } from "react"

export class NameElement extends Component {
    render(){
      const { myName } = this.props
      return(
        <h1>{myName}</h1>
      )
    }
  }  
  