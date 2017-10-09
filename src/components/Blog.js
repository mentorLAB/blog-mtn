import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formated from './subcomponents/Formated';



class Blog extends Component{
    constructor(){
        super();
        this.state = {
            blog: {}
        }
    }

    //insert a componentDidMount method with an axios call to the the data:
    componentDidMount(){
        axios.get(`/api/blog/${this.props.match.params.id}`).then(results=>{
            this.setState({
                blog: results.data
            })
        })
    }
    
    render(){
        const blog = this.state.blog;
        return(
            <div className='content blog-content' >
                    <div className="blog-img" style={{backgroundImage: `url(${blog.imgUrl})`, backgroundSize:'cover'}}>
                        <h1>{blog.title}</h1>
                    </div>
                <div className="blog-container">
                    <h2>{blog.subTitle}</h2>
                    {
                        blog.name
                        ?
                        <h3>{blog.name}</h3>
                        :
                        null
                    }
                    <hr/><br/>
                    <Formated text={blog.text}/>
                </div>
                <Link to={`/edit/${blog.id}`} >
                <button>Edit</button>
                </Link>
                <br/>
            </div>
        )
    }
}

export default Blog;