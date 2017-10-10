import React, { Component } from 'react';
import BlogTile from './subcomponents/BlogTile';

import axios from 'axios';

class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            searchResults: []
        }
    }

    // Insert a componentDidMount method?
    
    // Insert a search method to make an axios request to setState -> display.
    search(){
        console.log('searching');
        axios.get(`/api/blogs?q=${this.state.searchTerm}`).then(results=>{
            console.log(results.data);
            this.setState({
                searchResults: results.data
            })
        }).catch(console.log)
    }
    
    
    render(){
        // map over the searchResults here
        const results = this.state.searchResults.map((c,i)=> <BlogTile key={i} blog={c}/> )
        return(
            <div className='content' >
                <form className='search-group' onSubmit={_=>this.search()} >
                    <label htmlFor="">Search Blog Posts </label>
                    <input autoFocus onChange={e=>this.changeSearch(e.target.value)} value={this.state.searchTerm} type="text"/>
                    <button type="submit">Search</button>
                </form>
                <div className="blog-list">
                    {/* insert your mapped data from searchResults here */}
                    {results}
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