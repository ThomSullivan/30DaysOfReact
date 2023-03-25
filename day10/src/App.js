import { Component, useEffect } from "react"
import { Header } from "./components/Header/Header"
import { MyInfo } from "./components/MyInfo/MyInfo"
import { Country } from "./components/Country/Country"
import { Graph } from "./components/Graph/Graph"
import { Numbers } from "./components/Numbers/Numbers"
import { Colors } from "./components/Colors/Colors"
import{ Footer } from "./components/Footer/Footer"

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
      document.title = 'Day 10';
    }, []);
  }

export class App extends Component{
    render(){
      return(
      <div style={ defaultAppStyles }>
          <Title />
          <Header name='30 Days of React' day='Day 10' challenge='Folder Structure' />
          <MyInfo data={ myInfoObject }/>
          <Country />
          <Graph />
          <Numbers numbers={ numList } />
          <Colors colors={colorsList} />
          <Footer year={ myInfoObject.year } style={ footerStyles }/>
      </div>
      )
    }
  }
  