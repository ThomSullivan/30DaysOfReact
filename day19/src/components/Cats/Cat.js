import { Component } from "react";

const catCard = {
 display: 'inline-block',
 width : 300,
 verticalAlign : 'top'
}
const imageStyles = {
    width : '100%'
}

export class Cat extends Component {
    render(){
        const {
            name, 
            description,
            imageId
        
        } = this.props
        return(
            <div style={ catCard }>
            <p>{ name }</p>
            <img style={ imageStyles }src={`https://cdn2.thecatapi.com/images/${ imageId }.jpg`}></img>
            <p>{ description }</p>
            </div>
        )
    }
}