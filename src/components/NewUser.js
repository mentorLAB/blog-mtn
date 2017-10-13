import React, { Component } from 'react'
//import axios
import axios from 'axios'

class NewUser extends Component{
    constructor(){
        super()

        this.state={
            name: '',
            img: '',
            desc: ''
        }
    }

    /*
    build a method called addUser that will send the 
    state object to '/api/users' to be added as a new user 
    and then reroute to the newly created users' page 
    ('/user/' + id).
    */

    addUser(){
        console.log(this.state)
        axios.post('/api/users', this.state).then(response=>{
            console.log(response)
            let { id } = response.data
            this.props.history.push(`/user/${id}`)
        })
    }

    render(){
        return(
            <form className='new-user' onSubmit={this.addUser}>            
                <input type='text' name='name' value={this.state.name} onChange={e=>this.handleChange(e)} />
                <input type='text' name='desc' value={this.state.desc} onChange={e=>this.handleChange(e)} />
                <input type='text' name='img' value={this.state.img} onChange={e=>this.handleChange(e)} />
                <button type='submit'>Create User</button>
            </form>
        )
    }

    handleChange(e){
        let { value, name } = e.target
        this.setState(_=>{
            let newState={}
            newState[name]=value
            return newState
        })
    }
}

export default NewUser