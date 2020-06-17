import React from'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user: {},
            post:[]
        }
    }
    componentDidMount(){
        const id= this.props.match.params.id
        const userId=this.state.post.userId
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user= response.data
            this.setState({user})
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts?${userId}=${id}`)
        .then((response)=>{
            const post= response.data
            this.setState({post})
        })
    }
    render(){
        console.log('user show component',this.props)
        return(
            <div>
                <h1>UserName:{this.state.user.name}</h1>
                <h3>Post from user  {this.props.match.params.id}</h3>
                <ul>{
                    this.state.post.map((ele)=>{
                        return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ ele.title }</Link></li> 

                    })
                    }
                </ul>
              
            </div>
        )
    }
 
}
export default UserShow