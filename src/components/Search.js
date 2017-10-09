import React, { Component } from 'react';
import BlogTile from './subcomponents/BlogTile';



class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            display: []
        }
    }

    //Insert a componentDidMount method
    
    // Insert a search method to make an axios request to setState -> display.
    
    
    render(){
        const displayBlogs = this.state.display.map((c,i)=><BlogTile key={i} blog={this.state.testBlog}/>)
        return(
            <div className='content' >
                <form className='search-group' >
                    <label htmlFor="">Search Blog Posts </label>
                    <input onChange={e=>this.changeSearch(e.target.value)} value={this.state.searchTerm} type="text"/>
                    <button type="submit">Search</button>
                </form>
                <div className="blog-list">
                    {displayBlogs}
                </div>
                
            </div>
        )
    }
    changeSearch(val){
        this.setState({
            searchTerm: val
        })
    }
}

export default Search;