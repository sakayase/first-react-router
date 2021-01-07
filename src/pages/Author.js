import axios from 'axios';
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Author extends Component {
    state = {
        data: [],
    }

    static propTypes = { //si on passe par un composant dans Post.js peut etre utile ?
        prop: PropTypes.func
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                this.setState({
                    data: res.data,
                })
            })
    }

    render() {
        if(this.props) { //si on passe par un composant dans Post.js peut etre utile ?
            return (
                <div>
                    <h1>Author</h1>
                    <ul>
                        <li>Name: {this.state.data.name}</li>
                        <li>Mail: {this.state.data.email}</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Author</h1>
                </div>
            )
        }
    }
}
