import React, {Component} from 'react'
import DogsList from './Components/DogsList'
import Header from './Components/Header'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <DogsList />
      </div>
    )
  }
}



export default App
