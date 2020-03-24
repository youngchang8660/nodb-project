import React, {Component} from 'react'
import axios from 'axios'
import Dog from './Dog'

class DogsList extends Component {
    constructor() {
        super()
        this.state = {
            breed: '',
            image: '',
            price: '',
            pets: []
        }
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.placeholder]: e.target.value
        })
    }
    
    componentDidMount() {
        axios.get(`http://localhost:3010/api/pets`)
        .then(res => {
            this.setState({
                pets: res.data
            })
        })
    }


    addPets = (e) => {
        const obj = {
            breed: this.state.breed,
            image: this.state.image,
            price: this.state.price,
        }
        axios.post(`http://localhost:3010/api/pets`, obj)
        .then(res => {
            this.setState({
                breed: '',
                image: '',
                price: '',
                pets: res.data
            })
        })
    }

    deletePets = (id) => {
        axios.delete(`http://localhost:3010/api/pets/${id}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                pets: res.data
            })
        })

    }

    updatePets = (id, price) => {
        axios.put(`http://localhost:3010/api/pets/${id}`, {price})
        .then(res => {
            this.setState({
                price: '',
                pets: res.data
            })
        })
    }


    render() {
        // console.log('breed', this.state.breed)
        // console.log('image', this.state.image)
        // console.log('price', this.state.price)
        console.log('obj', this.state.obj)
        console.log('pets', this.state.pets)
        const mappedList = this.state.pets.map((element, i) => {
            return <Dog state={this.state} handleChange={this.handleChange} update={this.updatePets} delete={this.deletePets} key={i} puppy={element}/>
        })
        return (
            <div className='body'>
                <div className='input-boxes'>
                    <input className='input-box first-input' value={this.state.breed} onChange={(e) => this.handleChange(e)} placeholder='breed'/> <br/>
                    <input className='input-box' value={this.state.image} onChange={(e) => this.handleChange(e)} placeholder='image'/> <br/>
                    <input className='input-box' value={this.state.price} onChange={(e) => this.handleChange(e)} placeholder='price'/> <br/>
                    <button className='add-button' onClick={this.addPets}>Submit</button>
                </div>
                <div className='puppy-image'>
                    {mappedList}
                </div>
            </div>
        )
    }
}

export default DogsList