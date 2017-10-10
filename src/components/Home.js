import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';

import axios from 'axios';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: [{image: 'https://unsplash.it/900/400/?random'}],
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
                index: newIndex,
                posts: results.data
            })
        }).catch(console.log)
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