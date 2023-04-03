import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

const Input = ({ type, placeholder, style }) => {
  return (
    <input type={type} placeholder={placeholder} style={style}></input>
  )
}

const inputWithStyles = (CompParam, name = 'default') => {
  const sizes = [
    {
      name: 'small',
      width: '10%'
    },
    {
      name: 'medium',
      width: '25%'
    },
    {
      name: 'large',
      width: '50%'
    }
  ]
  const {width} = sizes.find((size)=> size.name === name)

  const inputStyles = {
    display:'flex',
    alignContent:'center',
    width,
    height: 'auto'
  }
  return (props) => {
    return <CompParam {...props} style={inputStyles} placeholder={name}/>
  }
}
const SmallInput = inputWithStyles(Input, 'small')
const MediumInput = inputWithStyles(Input, 'medium')
const LargeInput = inputWithStyles(Input, 'large')

class App extends Component {
  render() {
    return (
      <>
      <Input type='text' placeholder='Test' />
      <SmallInput />
      <MediumInput />
      <LargeInput />
      </>

    )
  }
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);