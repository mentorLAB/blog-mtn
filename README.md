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
}
```

</details>
</details>



## Blog
Next we are going to add axios to the Blog.js component.

This axios request will also be in the `componentDidMount` method.

The enpoint will be at `/api/blog/:id`. The `:id` is a parameter. Meaning that the http request will send whatever is after the `/` as a varible to select the corresponding blog from the api. For example: `/api/blog/5` indicates to the api to get the blog with an id of `5`.

This parameter is being used in the React routing also. You can access the parameter in react thusly: `this.props.match.params.id` in this case.

Append the blog id to the api endpoint.

Assign the results to the `blog` property on state.

<details>
  <summary>Solution:(Click to Expand)</summary>
```
componentDidMount(){
    axios.get('/api/blog/${this.props.match.params.id}').then(results=>{
        this.setState({
            blog: results.data
        })
    })
}
```
</details>

## Search

## Add

## Edit


## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">