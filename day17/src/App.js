import { Component, useEffect } from "react"

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


import { Header } from "./components/Header/Header"
import { MyInfo } from "./components/MyInfo/MyInfo"
import { Country } from "./components/Country/Country"
import { Graph } from "./components/Graph/Graph"
import { Numbers } from "./components/Numbers/Numbers"
import { Colors } from "./components/Colors/Colors"
import{ Footer } from "./components/Footer/Footer"
import { NavBar } from "./components/NavBar/NavBar"
import {RunningButton} from "./components/RunningButton/RunningButton"

const day = 17

const myInfoObject = {
    name:'Thomas Sullivan',
    infoList : ['United States',' Girl Dad', 'Software Engineer','sullivan.thom@gmail.com'],
    year : 2023,
    skillsList : ['Python', 'Django', 'Flask','NumPy','Pandas','Data Analysis', 'Git','JavaScript', 'React','HTML','CSS', 'MYSql']
  }

  const numList = [...Array(100).keys()]

  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
  
  
  const colorsList = numList.map((e)=>{
    return hexaColor()
  })

  const footerStyles = {
    border : '5px solid purple',
    textAlign : 'center',
    
  }
  const defaultAppStyles = {
    
    fontFamily: 'FreeMono, monospace',
    
  }

  function Title() {
    useEffect(() => {
      document.title = `Day ${day}`;
    }, []);
  }

export class App extends Component{
    render(){
      return(
      <div style={ defaultAppStyles }>
        
        <Router>
        <NavBar />
          <Title />
          <Header name='30 Days of React' day={day} challenge='React Routing' />
          <div className='content'>
            <Routes>
                <Route path='/vacation' element={<Country />} />
                <Route path='/populations' element={<Graph />} />
                <Route path='/numbers' element={<Numbers numbers={ numList } />} />
                <Route path='/colors' element={<Colors colors={colorsList} />} />
                <Route path='/runningButton' element={<RunningButton />} />
                <Route path='/' element={<MyInfo data={ myInfoObject }/>} />
              </Routes>
            </div>
            <Footer year={ myInfoObject.year } style={ footerStyles }/>
          </Router>
      </div>
      )
    }
  }
  