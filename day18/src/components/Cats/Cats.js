import { Component } from "react";
import axios from 'axios'

import { Cat } from "./Cat";
import { Graph } from "../Graph/Graph";

export class Cats extends Component {
    state = {
        data: [],
      }
    
      componentDidMount() {
        this.fetchCatData()
      }
      fetchCatData = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds'
        try {
          const response = await axios.get(url)
          const data = await response.data
          this.setState({
            data,
          })
        } catch (error) {
          console.log(error)
        }
      }
    
    
    render(){
        const catList = this.state.data.map(e => <Cat name={e.name} />)
        const totalCats= catList.length
        const totalCatWeight = this.state.data.reduce((a, b)=>{
            a = a + +b.weight.imperial.match(/\d+$/)
            return a
            }, 0)
        const totalCatAge = this.state.data.reduce((a ,b) =>{
            a += +b.life_span.match(/\d+$/)
            return a
        }, 0)
        const countries = []
        this.state.data.forEach((e)=>{
            let origin = e.origin
            let labelIndex = countries.findIndex(e=>e.label.includes(origin))
            if (labelIndex === -1){
                let obj = {label:e.origin, y:1}
                countries.push(obj)
            }else{
                countries[labelIndex].y += 1
            }
        })
        
        countries.sort((a, b)=>{
            if (a.y > b.y ) return 1
            if (a.y < b.y ) return -1
            return 0
        })
        return(
            <>
            <h1 key={totalCats}>There are {totalCats} cat breeds </h1>
            <h2 key='averageWeight'>The average cat weight is { (totalCatWeight/totalCats).toFixed(2) }</h2>
            <h2 key='averageLife'>The average cat life span is { (totalCatAge/totalCats).toFixed(2) }</h2>
            <h2 key='origins'>Cats originate from  { countries.length } countries around the world</h2>
            <Graph name="Cat Origins by Country" data={countries.slice(10)} />
            </>
        )
    }
}