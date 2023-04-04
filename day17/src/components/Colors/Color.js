import { Component } from "react"

const hexaColorBox = {
    fontSize :'large',
    display :'inline-block',
    width : 100,
    color : 'white',
    margin : 1,
    textAlign: 'center',
    padding:'50px 20px 50px 20px',
    borderRadius:'5%'
  }

export class Color extends Component {
    render(){
      const { color } = this.props
      return (
          <div style={Object.assign({},hexaColorBox,{backgroundColor:color})}>
            {color}
          </div>
          )
    }
  }
  