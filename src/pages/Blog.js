import React, { Component } from 'react'
import axios from "axios";
import { Route, Link } from 'react-router-dom';
import Post from './Post';
import Author from './Author';

export default class Blog extends Component {

    state = {
        dataPosts: [],
        dataUsers: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                dataPosts:res.data
            })
        })
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                dataUsers:res.data
            })
        })
    }

    render() {

        if (this.state.dataPosts.length>0 & this.state.dataUsers.length>0){
            
            const postsJSX = this.state.dataPosts.map(post => {

                const authorId = post.userId
                const author = this.state.dataUsers[authorId - 1].name  //-1 car index this.state.dataPosts 0-9 alors que userId 1-10
                return (

                    <div className="card col-6 text-dark bg-light mb-3 p-0">
                        <div className="card-header"><Link to={`/author/${authorId}`}>{author}</Link></div>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text"><Link to={`/blog/${post.id}`}>Read more</Link></p>
                        </div>
                    </div>
                )
            })


            return (
                <div className="container">
                    <h1 className="text-center">Mes articles</h1>
                    <div className="row">
                        {postsJSX}
                    </div>
                   
                    
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Mes articles</h1>
                    
                </div>
            )
        }
    }
}
