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
import { Cats } from "./components/Cats/Cats"

const day = 19



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
const populations = [      
  { label: 'Japan', y: 126960000 },
  { label: 'Russian Federation', y: 146599183 },
  { label: 'Bangladesh', y: 161006790 },
  { label: 'Nigeria', y: 186988000 },
  { label: 'Pakistan', y: 194125062 },
  { label: 'Brazil', y: 206135893 },
  { label: 'Indonesia', y: 258705000 },
  { label: 'United States of America', y: 323947000 },
  { label: 'India', y: 1295210000 },
  { label: 'China', y: 1377422166 }
]
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
          <Header name='30 Days of React' day={day} challenge='Fetch with Axios' />
          <div className='content'>
            <Routes>
                <Route path='/vacation' element={<Country />} />
                <Route path='/populations' element={<Graph name="World Populations" data={populations} />} />
                <Route path='/numbers' element={<Numbers numbers={ numList } />} />
                <Route path='/colors' element={<Colors colors={colorsList} />} />
                <Route path='/runningButton' element={<RunningButton />} />
                <Route path='/cats' element={<Cats />} />
                <Route path='/' element={<MyInfo data={ myInfoObject }/>} />
              </Routes>
            </div>
            <Footer year={ myInfoObject.year } style={ footerStyles }/>
          </Router>
      </div>
      )
    }
  }
  