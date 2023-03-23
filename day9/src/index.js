import { countriesData } from './countries_data.js';
import React, { useEffect, Component } from 'react'
import { createRoot } from 'react-dom/client';

import thomPicture from './images/thom.jpg'

//DATA

const myInfoObject = {
  name:'Thomas Sullivan',
  infoList : ['United States',' Girl Dad', 'male','sullivan.thom@gmail.com'],
  year : 2023,
  skillsList : ['Python', 'Django', 'Flask','NumPy','Pandas','Data Analysis', 'Git','JavaScript', 'React','HTML','CSS', 'MYSql']
}



// STYLES


const defaultUserCardStyles = {
  
  margin:'0 10% 0 10%'
}
const userBox = {
  padding : 10,
}
const buttonStyles = {
  padding:20,
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
  
}
const imageStyles = {
  width:'150px',
  height:'auto',
  borderRadius:'100%'
}

const countryCardStyles = {
  width:"fit-content",
  display : 'block',
  marginLeft : 'auto',
  marginRight : 'auto',
  borderStyle :'solid',
  textAlign : 'center',
  padding : 20,
}
const countryNameStyles = {
  fontSize : '20pt',
}
const flagImgStyles = {
  maxWidth:'100%',
  minWidth:'100%',
  maxHeight:'100%',
  display:'block',
  
}
const flagBoxStyles = {
  display:'block',
  marginLeft : 'auto',
  marginRight : 'auto',
  width : 300,
  height : 150,
  
  
}

const footerStyles = {
  border : '5px solid purple',
  textAlign : 'center',
  
}
const defaultAppStyles = {
  
  fontFamily: 'FreeMono, monospace',
  
}
const seasonStyles = {
  winter:{backgroundColor:'white'},
  spring:{backgroundColor:'green'},
  summer:{backgroundColor:'red'},
  fall:{backgroundColor:'orange'}
}
const timeOfDayStyles = {
  morning:{backgroundColor:'purple'},
  noon:{backgroundColor:'blue'},
  evening:{backgroundColor:'orange'},
  night:{backgroundColor:'black', color:'white'}
}
//ELEMENTS

function Title() {
  useEffect(() => {
    document.title = 'Day 9';
  }, []);
}

class Header extends Component {
  
  getSeason = () =>{
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var dateDay = Math.floor(diff / oneDay);
    let season
    if (dateDay <= 80){
      season = 'winter'
    }else if(dateDay <= 171){
      season = 'spring'
    } else if(dateDay <= 264){
      season = 'summer'
    } else {
      season = 'fall'
    }
    return season 
  }
  
  render(){
    const {
      name,
      day,
      challenge
    } = this.props
    
    return(
      <div style={seasonStyles[this.getSeason()]}>
        <h1>{name}</h1>
        <h2>{day}</h2>
        <h3>{challenge}</h3>
      </div>
    )
  }
}

class NameElement extends Component {
  render(){
    const { myName } = this.props
    return(
      <h1>{myName}</h1>
    )
  }
}  

class InfoElements extends Component {
  render(){
    const { infoList } = this.props
    return(
      infoList.map(e=> <li key={e}>{e}</li>)
    )
  }
}
class SkillsElements extends Component {
  render() {
    const { skillsList } = this.props
    return (
      skillsList.map (e=> <div key={e} style={skillsStyles}>{e}</div>)
    )
  }
}

class MyInfo extends Component {
  state = {
    styles:defaultUserCardStyles
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
        
        </div>
      </main>
    )
  }
}

class Button extends Component{
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

class Country extends Component {
  state = {
    index : 160,
    loading : false
  }
  
  getRandomCountry = () =>{
    let index = Math.floor(Math.random() * countriesData.length)
    this.setState({
      index:index,
      loading:false
    })
  }
  fetchCountry = () =>{
    this.setState({
      loading:true
    })
    setTimeout(this.getRandomCountry, 3000)
  }
  getTimeOfDay = () =>{
    const date = new Date()
    const hour = date.getHours()
    if (hour <= 10){
      return 'morning'
    } else if (hour <=17){
      return 'noon'
    } else if (hour <=20){
      return 'evening'
    } else {
      return 'night'
    }
  }
  render(){
    const {
      name,
      capital,
      population,
      flag,
      region,
      area
    } = countriesData[this.state.index]
    let languages = countriesData[this.state.index].languages.join(', ')

    let countryInfo
    if (this.state.loading === false){
      countryInfo = 
      <div>
        <div style={flagBoxStyles}>
          <img style={flagImgStyles} src={flag} alt={name}></img>
        </div>
        <div style={countryNameStyles}>{name}</div>
        <div style={timeOfDayStyles[this.getTimeOfDay()]}>
        <div>Capital: {capital}</div>
        <div>Languages: {languages}</div>
        <div>Population: {population}</div>
        <div>Region: {region}</div>
        <div>Land area: {area} K<sup>2</sup></div>
      </div>
      <Button buttonName='Get a random country' onClick={this.fetchCountry}/>
      </div>
    } else{
      countryInfo = <div>Loading</div>
    }

    return(
      <div style={countryCardStyles}>
      {countryInfo}
      </div>
    )
  }
}




class Footer extends Component {
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

class App extends Component{
  
  
  render(){
    return(
    <div style={defaultAppStyles}>
        <Title />
        <Header name='30 Days of React' day='Day 9' challenge='Conditional Rendering' />
        <MyInfo data={myInfoObject}/>
        
        <Country />
        
        <Footer year={myInfoObject.year} style={footerStyles}/>
        
    </div>
    )
  }
}


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);