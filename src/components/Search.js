import React, { Component } from 'react';
import axios from 'axios';

import BlogTile from './subcomponents/BlogTile';
import UserTile from './subcomponents/UserTile';


class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            blogResults: [],
            userResults: [],
            searchType: 'blogs',
        }
    }
    
    // Insert a search method to make an axios request to setState -> display.
    search(e){
        e.preventDefault()
        console.log('searching type: ', this.state.searchType);
        console.log(`/api/${searchType}?q=${searchTerm}`);
        const { searchTerm, searchType }=this.state
        console.log(searchTerm, searchType)
        axios.get(`/api/${searchType}?q=${searchTerm}`).then(response=>{
            if(searchType==='blogs'){
                console.log(searchTerm);
                this.setState({
                    blogResults: response.data,
                    userResults: []
                })
            }else{
                console.log(searchTerm);
                this.setState({
                    blogResults: [],
                    userResults: response.data
                })
            }
        })
    }
    
    
    render(){
        // map over the searchResults here
        const blogResults = this.state.blogResults.map((c,i)=> <BlogTile key={i} blog={c}/> )
        const userResults = this.state.userResults.map((c,i)=> <UserTile key={i} user={c}/>)

        return(
            <div className='content' >
                <form className='search-group' onSubmit={e=>this.search(e)} >
                    <label htmlFor="">Search Blog Posts </label>
                    <input autoFocus onChange={e=>this.changeSearch(e.target.value)} value={this.state.searchTerm} type="text"/>
                    <button type="submit">Search</button>
                    <div className='search-type'>
                        <input defaultChecked={this.state.searchType==='blogs'}
                        type='radio' name='searchType' value='blogs' onChange={e=>this.changeSearchType(e.target.value)}/> Blogs
                        <input defaultChecked={this.state.searchType==='users'} type='radio' name='searchType' value='users' onChange={e=>this.changeSearchType(e.target.value)}/> Users
                    </div>
                </form>
                <div className="blog-list">
                    {/* insert your mapped data from searchResults here */}
                    {blogResults}
                    {this.state.searchType==='users' && userResults}
                </div>
                
            </div>
        )
    }
   changeSearch(val){
       console.log(val)
        this.setState({
            searchTerm: val
        })
    }
    changeSearchType(val){
        this.setState({
            searchType: val
        })
    }
}

export default Search;