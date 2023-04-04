import React, { Component } from "react"
import thomPicture from "../../assets/images/thom.jpg"
import { NameElement } from "./NameElement"
import { InfoElements } from "./InfoElements"
import { SkillsElements } from "./SkillsElements"
import { Button } from "../Misc/Button"


const listStyles = {
    width:'fit-content', 
    display:'inline-block',
    verticalAlign:'top'
  }

  const imageStyles = {
    width:'150px',
    height:'auto',
    borderRadius:'100%'
  }
  const userBox = {
    padding : 10,
  }
  const defaultUserCardStyles = {
  
    margin:'0 10% 0 10%'
  }
  const darkUserCardStyles = {
    backgroundColor: 'Black',
    color:'white',
    margin:'0 10% 0 10%'
  }

export class MyInfo extends Component {
    state = {
      styles:defaultUserCardStyles
    }
    changeMode = () =>{
        let defaultStyles = defaultUserCardStyles
        let darkStyles = darkUserCardStyles
        let styles = this.state.styles === defaultStyles ?darkStyles : defaultStyles
        this.setState({ styles })
      }
    render(){
      const {
        name,
        infoList,
        skillsList
      } = this.props.data
      return (
        <main style={this.state.styles}>
          <div style={userBox}>
          <NameElement myName={name}/>
          <img style={imageStyles} src={thomPicture} alt={name}></img>
          <ul style={listStyles}><InfoElements infoList={infoList}/></ul>
          <div>
            <SkillsElements skillsList={skillsList}/>
          </div>
          <Button buttonName='Toggle Light/Dark mode' onClick={this.changeMode} />
          </div>
        </main>
      )
    }
  }