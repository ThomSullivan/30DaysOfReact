import { Component } from "react";

const runningButtonStyles = {
    position : 'fixed',
    width : 'fit-content',
    padding : 50,
    backgroundColor : 'teal'

}

export class RunningButton extends Component {
    state = {
        x : "50%",
        y : "50%"
    }
    handleOnHover = () =>{
        let width = window.innerWidth
        let height = window.innerHeight
        
        let num1 = Math.floor(Math.random() * (width - 300) )
        let num2 = Math.floor(Math.random() * (height - 120))
        this.setState({x:num1, y:num2})
    }
    render(){
    

    return(
        <div style={Object.assign({},runningButtonStyles,{top:this.state.y, left:this.state.x})} onMouseEnter={this.handleOnHover}>30 Days of React Day<div>The unsubscribe button</div></div>
    )
    }
}