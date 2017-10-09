import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';
class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: {},
            posts: []
        }
    }
    render(){
        const blogs = this.state.posts.map((c,i)=><BlogThumb key={i} blog={this.state.featured}/>)
        return(
            <div className="content" >
                <Hero blog={this.state.featured} />
                <hr/>
                <div className="blog-grid">
                    {blogs}
                </div>
            </div>
        )
    }
}

export default Home;