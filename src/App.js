import React from 'react' 
import { BrowserRouter, Route, Link } from 'react-router-dom' 
import Home from './components/static/Home'
import UsersList from './UsersList'
import UserShow from './UserShow'
import Post from './Post'
import PostShow from './PostShow'

function App () {
    return (
        <BrowserRouter>
        <div>
            <h1>Blogger App</h1>
            < Link to="/">Home </Link> |
            < Link to="/users">UsersList </Link> |
            < Link to="/posts">Post </Link> 
            

            <Route path="/" component={Home} exact={true}/>
            <Route path="/users" component={UsersList} exact={true}/>
            <Route path="/users/:id" component={UserShow}/>
            <Route path="/posts" component={Post} exact={true}/>
            <Route path="/posts/:id" component={PostShow}/>

           
        </div>
        </BrowserRouter>
    )
}

export default App