import { Component } from "react"

const skillsStyles = {
    display : 'inline-block',
    width : 'fit-content',
    borderStyle : 'solid',
    padding : '10px 15px',
    margin : '10px',
    borderRadius : '15px',
    
  }

export class SkillsElements extends Component {
    render() {
      const { skillsList } = this.props
      return (
        skillsList.map (e=> <div key={e} style={skillsStyles}>{e}</div>)
      )
    }
  }