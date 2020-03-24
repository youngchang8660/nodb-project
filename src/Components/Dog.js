// import React from 'react'

// const Dog = (this.props) => {
// console.log('price and puppy', props.state.price, props.puppy.id)
//     return (
//         <div>
//             <img width='200' height='200' alt='picture' src={props.puppy.image}/>
//             <h2>{props.puppy.breed}</h2>
//             <div className='price-box'>
//                 <h4>${props.puppy.price}</h4>
//                 <input value={props.state.price} onChange={props.handleChange} placeholder='price'/>
//                 <button onClick={() => props.update(props.puppy.id, {price: props.state.price})} >Edit</button>
//             </div>
//             <button onClick={() => props.delete(props.puppy.id)}>Delete</button>
//         </div>
//     )
// }


// export default Dog

import React, {Component} from 'react'
import axios from 'axios'

class Dog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            priceInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            priceInput: e.target.value
        })
    }

    update = () => {
        this.props.update(this.props.puppy.id, this.state.priceInput)
        this.setState({
            priceInput: ''
        })
    }


    render() {
        return (
            <div className='puppy-card'>
                <img width='300' height='300' alt='picture' src={this.props.puppy.image}/>
                <h2>{this.props.puppy.breed}</h2>
                <div className='price-box'>
                    <h4>${this.props.puppy.price}</h4>
                    <input className='edit-price' value={this.state.priceInput} onChange={this.handleChange} placeholder='price'/>
                    <button onClick={() => this.update()} >Edit</button>
                </div>
            <button onClick={() => this.props.delete(this.props.puppy.id)}>Delete</button>
            </div>
        )
    }
}

export default Dog
