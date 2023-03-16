import ReactDOM from 'react-dom'
import React, { useEffect } from 'react'

import thomPicture from './images/thom.jpg'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import reactLogo from './images/react_logo.png'
import javaScriptLogo from './images/javascript_logo.png'

//DATA

const myInfoObject = {
  name:'Thomas Sullivan',
  infoList : ['United States',' Girl Dad', 'male','sullivan.thom@gmail.com'],
  year : 2023,
  skillsList : ['Python', 'Django', 'Flask','NumPy','Pandas','Data Analysis', 'Git','JavaScript', 'React','HTML','CSS', 'MYSql']
}

// STYLES
const h2Styles = {
  textAlign:'center',
  fontSize:'35pt',
  fontFamily:'"Times New Roman", serif',
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
const colorsBoxStyles = {
  //for the box around all the colors
  borderStyle : 'solid',
}
const colorBoxStyles = {
  //for the singlular color elements
  textAlign : 'center',
  fontSize : '40pt',
  padding : '50px 0 50px 0',
  
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

//ELEMENTS

function Title() {
  useEffect(() => {
    document.title = 'Day 4';
  }, []);
}
const MyInfo = ()=>{
  const NameElement = () =>{
    return(
      <h1 style={{fontSize:'75pt'}}>{myInfoObject.name}</h1>
    )}  
  const InfoElements = () =>{
    return(
      myInfoObject.infoList.map(e=> <li key={e}>{e}</li>)
    )}
  const SkillsElements =()=>{
    return (
      myInfoObject.skillsList.map (e=> <div style={skillsStyles}>{e}</div>)
    )}
  return (
    <main style={mainStyles}>
      <div style={{marginLeft:'15%'}}>
      <NameElement />
      <img style={imageStyles} src={thomPicture} alt="Thomas Sullivan"></img>
      <ul style={listStyles}><InfoElements /></ul>
      <div>
        <SkillsElements />
      </div>
      </div>
    </main>
  )
}

const Footer = () =>{
  return(
    <footer style={footerStyles}>
      Copyright {myInfoObject.year}
    </footer>
  )}

const FrontEndTechs = () =>{
  return(
    <div style={centerStyle}>
      <img style={techLogoStyles} src={cssLogo} alt="CSS logo"></img>
      <img style={techLogoStyles} src={htmlLogo} alt="HTML logo"></img>
      <img style={techLogoStyles} src={reactLogo} alt="React logo"></img>
      <img style={techLogoStyles} src={javaScriptLogo} alt="JavaScript logo"></img>
    </div>
  )}

const FormDiv = () =>{
  return (
    <div style={centerStyle}>
      <div style={formCard}>
      <h2 style={h2Styles}>Sign up with you e-mail address and recieve news and updates.</h2>
      <input style={inputStyles} type="text" placeholder='First name'></input>
      <input style={inputStyles} type="text" placeholder='Last name'></input>
      <input style={inputStyles} type="email" placeholder='E-mail'></input>
      <button style={buttonStyles}type="button">SUBSCRIBE</button>
      </div>
    </div>
  )}

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
const RandomColorBox = () =>{
  let divs = []
  for (let i=0;i<5;i++){
    let color = hexaColor()
    let singleColorStyles = Object.assign({}, colorBoxStyles, {backgroundColor:color})
    divs.push(<div id={{color}}style={singleColorStyles}>{color}</div>)
  }
  
  return(
    <div style={colorsBoxStyles}>{divs}</div>
  )}

const App = ()=>{
  return(
  <div style={appStyles}>
      <Title />
      <MyInfo />
      <FrontEndTechs />
      <FormDiv />
      <RandomColorBox />
      <Footer />
      
  </div>
)}


const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)