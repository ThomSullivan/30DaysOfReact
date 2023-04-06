import { Component } from "react";
export class Cat extends Component {
    render(){
        const {
            name
        } = this.props
        return(
            <p key={name}>{ name }</p>
        )
    }
}