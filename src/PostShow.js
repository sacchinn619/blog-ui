import React from'react'
import axios from 'axios'
class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            user: {},
            post:[],
            comments:[]
        }
    }
    componentDidMount(){
        const id= this.props.match.params.id
        const postId=this.state.comments.postId
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user= response.data
            this.setState({user})
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const post= response.data
            this.setState({post})
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments?${postId}=${id}`)
        .then((response)=>{
            const comments= response.data
            this.setState({comments})
        })
    }
    render(){
        console.log('user show component',this.props)
        return(
            <div>
                <h1>UserName-{this.state.user.name}</h1>
                <h2>Title-{this.state.post.title}</h2>
                <h2>Body:</h2>
                <h2>{this.state.post.body}</h2>
                <hr></hr>
                <h1>Comments</h1>
              <ul>{
                  this.state.comments.map((ele)=>{
                    return <li key={ele.id}>{ ele.body }</li> 
                
                })
                }
                </ul>
                </div>
                )
            }
        
        }
        export default PostShow
            
        
        
        
    
                
            