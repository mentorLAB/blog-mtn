<img src="https://devmounta.in/img/logowhiteblue.png" width="250">

# Http-afternoon Project

## Setup
First you will want to fork and clone this repo and install the neccissary npm packages.

#### Fork and Clone
In your terminal navigate to the folder that will contain this afternoon project.Then clone the repo with this command:

`git clone https://github.com/DevMountain/http-afternoon`

Next cd into the new project folder:
`cd http-afternoon`

Then you will need to install the required react packages by running:

`npm install`

You can make sure the project is ready to work on by running: 

`npm start`

## Install axios

Install axios into the project:
`npm install axios --save`

## Api Documentation

#### Endpoints

Method: GET
`/api/user/:id`
`/api/users`
`/api/blog/:id`
`/api/blogs`
`/api/featured`
`/api/blog/user/:id`

Method: POST
`/api/user/`
`/api/blog/`

Method: PUT
`/api/user/:id`
`/api/blog/:id`

Method: DELETE
`/api/user/:id`
`/api/blog/:id`

 

## Home view

Open the Home.js file in the components folder.
Import axios near the top of the file:
`import axios from 'axios';`
Now, you will make a `componentDidMount` method and use axios to make a GET request to the endpoint: `'/api/featured'`

Using the `.then` function on the axios call, set the `featured` property in state to the appropriate data in the results.


<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Home.js</code></summary>

```javascript
componentDidMount(){
    axios.get('/api/featured').then(results=>{
        this.setState({
            featured: results.data
        })
    })
    axios.get(`/api/blogs`).then(results=>{
        this.setState({
            posts: results.data
        })
    })
}
```

</details>
</details>



## Blog
Next we are going to add axios to the Blog.js component.
Import axios near the top of the file:
`import axios from 'axios';`

This axios request will also be in the `componentDidMount` method.

The enpoint will be at `/api/blog/:id`. The `:id` is a parameter. Meaning that the http request will send whatever is after the `/` as a varible to select the corresponding blog from the api. For example: `/api/blog/5` indicates to the api to get the blog with an id of `5`.

This parameter is being used in the React routing also. You can access the parameter in react thusly: `this.props.match.params.id` in this case.

Append the blog id to the api endpoint.

Assign the results to the `blog` property on state.


<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Blog.js</code></summary>

```javascript
componentDidMount(){
    axios.get(`/api/blog/${this.props.match.params.id}`).then(results=>{
        this.setState({
            blog: results.data
        })
    })
}
```

</details>
</details>

## Search

Next we are going to add axios to the Search.js component.
Import axios near the top of the file:
`import axios from 'axios';`

This axios request will be in a method you will make called `search`.

The enpoint will be at `/api/blogs`. 

You are going to append a query to the end of the endpoint.

Queries are in the format: `?[keyName]=[value]` ie: `?q=how to get a job`

Assign the results to the `blog` property on state.


<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Search.js</code></summary>

```javascript
search(){
    axios.get(`/api/blogs/?q=${this.state.searchTerm}`).then(results=>{
        this.setState({
            searchResults: results.data
        })
    })
}
```

</details>
</details>

## Add

Next we are going to add axios to the Add.js component.
Import axios near the top of the file:
`import axios from 'axios';`

This axios request will be in a method you will make called `post`.

The enpoint will be at `/api/blog`.


<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Add.js</code></summary>

```javascript
post(){
    let body = {title: this.state.title, subTitle: this.state.subTitle, imgUrl: this.state.imgUrl, text: this.state.text}
    axios.post('/api/blog', body).then(results=>{
        this.setState({
            searchResults: results.data
        })
    })
}
```

</details>
</details>


## Edit

Next we are going to add axios to the Edit.js component.
Import axios near the top of the file:
`import axios from 'axios';`

This axios requests will be in a several methods you will make: `componentDidMount`, `updatePost`, and `deletePost`.

The `componentDidMount` method will be using a `get` request.

The `updatePost` method will be using a `put` request.

The `deletePost` method will be using a `delete` request.

The enpoint for all requests will be at `/api/blog/:id`.
You should notice that we are using a parameter again.
This will be available via: `this.props.match.params.id`

Your `get` request will set the blog property on state. 

The `put` request will route to the newly updated blog. Put in the callback of your `.then` method the following line: 

```javascript
this.props.history.push(`/blog/${this.props.match.params.id}`)
```

The `delete` request will route to the search page. Put in the callback of your `.then` method the following line: 

```javascript
this.props.history.push('/search')
```

<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Edit.js</code></summary>

```javascript
componentDidMount(){
    axios.get(`/api/blog/${this.props.match.params.id}`).then(results=>{
        this.setState({
            blog: results.data
        })
    })
}

updatePost(){
    let body = {title: this.state.title, subTitle: this.state.subTitle, imgUrl: this.state.imgUrl, text: this.state.text}
    axios.put(`/api/blog/${this.props.match.params.id}`, body).then(results=>{
        this.props.history.push(`/blog/${this.props.match.params.id}`)
    })
}

deletePost(){
    let body = {title: this.state.title, subTitle: this.state.subTitle, imgUrl: this.state.imgUrl, text: this.state.text}
    axios.delete(`/api/blog/${this.props.match.params.id}`).then(results=>{
        this.props.history.push('/search')
    })
}
```

</details>
</details>


## User

## User


## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">