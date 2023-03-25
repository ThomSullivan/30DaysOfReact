import { Component } from "react"
import { Number } from "./Number"

export class Numbers extends Component {
    render(){
      const { numbers } = this.props
      const numDivList = numbers.map((number)=>(
            <Number key={number} number={number} />
          ))
          return <div>
            <h1>Number Generator</h1>
            {numDivList}
            </div>
    }
  }
  