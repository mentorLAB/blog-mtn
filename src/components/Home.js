import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';
class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: {id: 113, title:'Creative Coding!', subTitle: 'To boldly code where no coder has coded before.', imgUrl: 'https://unsplash.it/900/400/?random'},
            posts: [1,2,3,4,5,6,7,8]
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