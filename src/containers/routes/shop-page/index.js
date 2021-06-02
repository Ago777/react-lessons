import React, {Component} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Users from './users';
import Posts from './users/posts';

class Shop extends Component {
    state = {
        isUsersPending: false,
        isPostsPending: false,
        users: [],
        posts: [],
    }

    getAllUsers = () => {
        this.setState({isUsersPending: true});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((result => this.setState({users: result, isUsersPending: false})))
            .catch(err => console.log(err))

    };

    getUserPosts = (id) => {
        this.setState({isPostsPending: true});
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then((result => this.setState({posts: result, isPostsPending: false})))
            .catch(err => console.log(err))
    };

    render() {
        if(this.state.isUsersPending) {
            return (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            )
        }

        return (
            <div>
                {this.state.users.length > 0 ? <Users users={this.state.users} getUserPosts={this.getUserPosts}/> : <button onClick={this.getAllUsers}>Get All Users</button>}
                {this.state.posts.length > 0 && <Posts posts={this.state.posts} isPostsPending={this.state.isPostsPending}/>}
            </div>
        );
    }
}

export default Shop;