import { Component } from "react";
import { Color } from "./Color";

export class Colors extends Component {
    render(){
      const { colors } = this.props
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
  }