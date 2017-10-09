import React, { Component } from 'react';
import BlogTile from './subcomponents/BlogTile';



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
        axios.get(`/api/blogs/?q=${this.state.searchTerm}`).then(results=>{
            this.setState({
                searchResults: results.data
            })
        })
    }
    
    
    render(){
        // map over the searchResults here

        return(
            <div className='content' >
                <form className='search-group' >
                    <label htmlFor="">Search Blog Posts </label>
                    <input autoFocus onChange={e=>this.changeSearch(e.target.value)} value={this.state.searchTerm} type="text"/>
                    <button type="submit">Search</button>
                </form>
                <div className="blog-list">
                    {/* insert your mapped data from searchResults here */}
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