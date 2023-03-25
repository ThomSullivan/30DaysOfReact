import { Component } from "react";
import { countriesData } from "../../countries_data";
import { Button } from "../Misc/Button";


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
  const timeOfDayStyles = {
    morning:{backgroundColor:'purple'},
    noon:{backgroundColor:'blue'},
    evening:{backgroundColor:'orange'},
    night:{backgroundColor:'black', color:'white'}
  }

export class Country extends Component {
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
  