import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';

// import axios

class Home extends Component{
    constructor(){
        super();
        this.state = {
            index: 0,
            posts: [{image: 'https://unsplash.it/900/400/?random'}]
        }
    }

    // Make a componentDidMount method here:
    

    render(){
        // map over your recommended blogs here
        

        return(
            <div className="content" >
                <Hero blog={this.state.posts[this.state.index]} />
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