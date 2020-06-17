import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Post extends React.Component {
    constructor() {
        console.log('constructor')
        super()
        this.state = {
            posts: []
        }
    }

    // life cycle method - will get called only after the first render//
    componentDidMount(){
       
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>{
           const posts= response.data
           this.setState({posts})
       })
       .catch((err)=>{
           console.log(err)

       })
    }
    render()
    { 
        console.log('render')
        return (
            <div>
                <h2>Listing posts - {this.state.posts.length} </h2> 
                <ul>
                    { this.state.posts.map((ele) => {
                        return <li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                    })}
                </ul> 
            </div> 
        )
    }
}
export default Post