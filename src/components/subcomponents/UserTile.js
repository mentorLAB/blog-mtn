import React, {Component} from 'react'

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
