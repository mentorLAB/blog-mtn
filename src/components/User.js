import React, { Component } from 'react'
import axios from 'axios'

class User extends Component{
    constructor(){
        super()

        this.state={
            name: '',
            img: '',
            desc: ''
        }
    }

    /*
    on componentWillMount, make an axios call to the DB 
    to retreive the requested user information 
    and set it to state
    */
    componentWillMount(){
        debugger
        axios.get(`/api/user/${this.props.match.params.id}`).then(response=>{
            let { name, img, desc } = response.data
            this.setState({
                name,
                img,
                desc
            })  
        })
    }

    render(){
        return (
            <div className='User'>
                {this.state.img &&
                <img src={this.state.img} alt='profile'/>}
                <h1>{this.state.name}</h1>
                <p>{this.state.desc}</p>
            </div>
        )
    }
}

export default User