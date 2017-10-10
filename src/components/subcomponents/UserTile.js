import React, {Component} from 'react'
import axios from 'axios'

class UserTile extends Component{

    render(){

        const user=this.props.user

        return(
            <div className="UserTile">
                <img src={user.img} alt="profile"/>
                <h1>{user.name}</h1>
                <p>{user.desc}</p>
            </div>
        )
    }
}

export default UserTile
