import React from 'react'
import ReactDOM from 'react-dom'
import thomPicture from './images/thom.jpg'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import reactLogo from './images/react_logo.png'
import javaScriptLogo from './images/javascript_logo.png'

const myInfoObject = {
  name:'Thomas Sullivan',
  infoList : ['United States',' Girl Dad', 'male','sullivan.thom@gmail.com'],
  year : 2023,
  skillsList : ['Python', 'Django', 'Flask','NumPy','Pandas','Data Analysis', 'Git','JavaScript', 'React','HTML','CSS', 'MYSql']
}


const mainStyles = {
  border : '5px solid blue',
  backgroundColor : 'yellow',
}
const listStyles = {
  width:'fit-content', 
  display:'inline-block',
  verticalAlign:'top'
}
const skillsStyles = {
  display : 'inline-block',
  width : 'fit-content',
  borderStyle : 'solid',
  padding : '10px 15px',
  margin : '10px',
  borderRadius : '15px',
  backgroundColor : 'brown',
  color : 'white'
}
const imageStyles = {
  width:'150px',
  height:'auto',
  borderRadius:'100%'
}
const centerStyle = {
  width:'fit-content',
  marginLeft:'auto',
  marginRight:'auto',
}
const techLogoStyles = {
  width:'200px',
  height:'auto'
}
const formCard = {
  borderStyle : 'solid',
  padding : '50px',
  backgroundColor:'green'
}
const inputStyles = {
  fontSize:'25pt',
  display:'inline-block',
  margin:'5px',
  borderRadius:'5px',
  padding : '70px'
}
const buttonStyles = {
  fontSize:'25pt',
  padding:'5px',
  display:'block',
  width:'fit-content', 
  marginLeft:'auto', 
  marginRight:'auto', 
  marginTop:'25px',
  backgroundColor:'orange',
}
const footerStyles = {
  border : '5px solid purple',
  textAlign : 'center',
  color : 'white',
}
const appStyles = {
  
  fontFamily: 'FreeMono, monospace',
  backgroundColor:'black'
}

const nameElement = <h1 style={{fontSize:'75pt'}}>{myInfoObject.name}</h1>
const infoElements = myInfoObject.infoList.map(e=> <li key={e}>{e}</li>)
const skillsElements =myInfoObject.skillsList.map (e=> <div style={skillsStyles}>{e}</div>)
const myInfo = <main style={mainStyles}>
  <div style={{marginLeft:'15%'}}>
  {nameElement}
  
  <img style={imageStyles} src={thomPicture} alt="Thomas Sullivan"></img>
  <ul style={listStyles}>{infoElements}</ul>
  <div>
    {skillsElements}
  </div>
  </div>
</main>
const footer = <footer style={footerStyles}>
  Copyright {myInfoObject.year}
</footer>

const frontEndTechs =
  <div style={centerStyle}>
    <img style={techLogoStyles} src={cssLogo} alt="CSS logo"></img>
    <img style={techLogoStyles} src={htmlLogo} alt="HTML logo"></img>
    <img style={techLogoStyles} src={reactLogo} alt="React logo"></img>
    <img style={techLogoStyles} src={javaScriptLogo} alt="JavaScript logo"></img>
  </div>

const formDiv = 
  <div style={centerStyle}>
    <div style={formCard}>
    <input style={inputStyles} type="text" placeholder='First name'></input>
    <input style={inputStyles} type="text" placeholder='Last name'></input>
    <input style={inputStyles} type="email" placeholder='E-mail'></input>
    <button style={buttonStyles}type="button">SUBSCRIBE</button>
    </div>
  </div>


const app = (
  <div style={appStyles}>
      {myInfo}
      {frontEndTechs}
      {formDiv}
      {footer}
  </div>
)


const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)