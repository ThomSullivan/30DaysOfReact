import React,{ Component } from "react";

import { NavLink } from 'react-router-dom'

export class NavBar extends Component {
    render(){
        return (
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/vacation'>Vacation Picker</NavLink>
                </li>
                <li>
                    <NavLink to='/populations'>Populations</NavLink>
                </li>
                <li>
                    <NavLink to='/numbers'>Numbers</NavLink>
                </li>
                <li>
                    <NavLink to='/colors'>Random Colors</NavLink>
                </li>
                <li>
                    <NavLink to='/runningButton'>a Funny button</NavLink>
                </li>
                <li>
                    <NavLink to='/cats'>Cats</NavLink>
                </li>
            </ul>
        )
    }
}