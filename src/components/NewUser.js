import React, { Component } from 'react'
//import axios
import axios from 'axios';

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

    addUser(e){
        e.preventDefault();
        if (this.state.name){
            axios.post('/api/users', this.state).then(response=>{
                console.log(response)
                let user = response.data
                this.props.history.push(`/user/${user.id}`)
            })
        } else {
            this.setState({warn: true})
            setTimeout(()=> {
                this.setState({warn: false})
            }, 2000);
        }
    }

    render(){
        console.log(this.state);
        return(
            <div className="content">
                {this.state.warn?<h4 style={{color: 'red'}}>You must include at least a name.</h4>:null}
                <form className='new-user' onSubmit={e=>this.addUser(e)}>
                    <div className="pic-input input-group">
                        {
                            this.state.img
                            ?
                            <img src={this.state.img} alt="profile pic"/> 
                            :
                            <div className="pic-placeholder">No Image Yet</div>
                        }
                        <span>
                            <label>Image URL</label>
                            <input type='text' name='img' value={this.state.img} onChange={e=>this.handleChange(e)} />
                        </span>
                    </div>
                    <div className="input-group in-group">
                        <label>Name</label>
                        <input type='text' name='name' value={this.state.name} onChange={e=>this.handleChange(e)} />
                    </div>
                    <div className="input-group in-group">
                        <label>Description</label>
                        <textarea name='desc' value={this.state.desc} onChange={e=>this.handleChange(e)} />
                    </div>
                    <button type='submit'>Create User</button>
                </form>
            </div>
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