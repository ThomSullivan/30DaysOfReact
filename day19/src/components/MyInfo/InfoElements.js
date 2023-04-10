import { Component } from "react"

export class InfoElements extends Component {
    render(){
      const { infoList } = this.props
      return(
        infoList.map(e=> <li key={e}>{e}</li>)
      )
    }
  }