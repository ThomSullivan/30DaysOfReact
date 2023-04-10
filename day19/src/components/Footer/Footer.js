import { Component } from "react";

export class Footer extends Component {
    render(){
      const {
        style,
        year,
      } = this.props
      return(
        <footer style={style}>
          Copyright {year}
        </footer>
      )
    }
  }