import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class UserTile extends Component{

    render(){

        const user=this.props.user

        return(
            <Link to={`/users/${user.id}`} className='UserTile'>
                <img src={user.img} alt="profile"/>
                <h1>{user.name}</h1>
                <p>{user.desc}</p>
            </Link>
        )
    }
}

export default UserTile
