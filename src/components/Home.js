import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';

import axios from 'axios';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: [{}],
            index: 0,
            posts: []
        }
    }

    // Make a componentDidMount method here:
    componentDidMount(){
        axios.get('/api/featured').then(results=>{
            let newIndex= (~~(Math.random() * results.data.length) + 0)
            this.setState({
                featured: results.data,
                index: newIndex
            })
        })
        axios.get(`/api/blogs`).then(results=>{
            this.setState({
                posts: results.data
            })
        })
    }

    render(){
        // map over your recommended blogs here
        const posts = this.state.posts.map((c,i)=><BlogThumb key={i} blog={c}/>)
        return(
            <div className="content" >
                <Hero blog={this.state.featured[this.state.index]} />
                <hr/>
                <div className="blog-grid">
                    {/* put your mapped blogs here */}
                    {posts}
                </div>
            </div>
        )
    }
}

export default Home;