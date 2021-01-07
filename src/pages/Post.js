import React, { Component } from 'react';
import axios from "axios";
import Author from './Author';
import { Link } from 'react-router-dom';

export default class Post extends Component {
    state= {
        data: {}
    }

    
    componentDidMount() {
        const id = this.props.match.params.id; //match recupere les infos transmises par l'url (props) | id => props dans app.js /:id dans le path
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => {
            this.setState({
                data:res.data
            })
        })
    }

    render() {
        if (this.state.data) {
            return (
                <div className="container">
                    <div className="card mt-5">
                        <div className="card-header">
                            {this.state.data.title}
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                            <p>{this.state.data.body}</p>
                                <footer className="blockquote-footer"><Link to={`/author/${this.state.data.userId}`}>En savoir plus sur l'auteur</Link></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                    //<Author match={{ params: { id: this.state.data.userId }}} />
)
        } else {
            return (
                <div className="container">
                    <h1>{this.state.data.title}</h1>
                    <p>{this.state.data.body}</p>
                </div>
            )
        }
        
    }
}
