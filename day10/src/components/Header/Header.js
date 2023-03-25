import React,{ Component } from "react";

const seasonStyles = {
    winter:{backgroundColor:'white'},
    spring:{backgroundColor:'green'},
    summer:{backgroundColor:'red'},
    fall:{backgroundColor:'orange'}
  }

export class Header extends Component {
  
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
  