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

    // Make a componentDidMount method here:


    render(){
        // map over your recommended blogs here

        return(
            <div className="content" >
                <Hero blog={this.state.featured} />
                <hr/>
                <div className="blog-grid">
                    {/* put your mapped blogs here */}
                </div>
            </div>
        )
    }
}

export default Home;