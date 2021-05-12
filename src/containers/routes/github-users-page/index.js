import React, {Component} from 'react';
import User from './user';

class GithubUsers extends Component {
    state = {
        isPending: true,
        users: [],
        selectedUser: {}
    }

    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then((result => this.setState({users: result, isPending: false})))
            .catch(err => console.log(err))
    }

    selectUser = (name) => {
        fetch(`https://api.github.com/users/${name}`)
            .then(response => response.json())
            .then((result => this.setState({selectedUser: result})))
            .catch(err => console.log(err))
    }

    render() {
        const {users, selectedUser} = this.state;

        if(this.state.isPending) {
            return (<h1>Loading...</h1>)
        }

        if(selectedUser.id) {
            return (
                <div className={'selected-user'}>
                    <div>
                        <img src={selectedUser['avatar_url']} width={'100%'} alt={'a'} height={400}/>
                    </div>
                    <div><span>Name:</span> {selectedUser['name']}</div>
                    <div><span>Company:</span> {selectedUser['company']}</div>
                    <div><span>Email:</span> {selectedUser['email'] || 'none'}</div>
                    <div><span>Location:</span> {selectedUser['location']}</div>
                    <div><span>Login:</span> {selectedUser['login']}</div>
                    <div><span>Public Repos:</span> {selectedUser['public_repos']}</div>
                    <div><span>Created:</span> {selectedUser['created_at']}</div>
                </div>
            )
        }

        return (
            <div>
                <h1>Github Users</h1>
                <div className={'users'}>
                    {
                        users.map(item => {
                            return (
                                <div className="card" key={item.id}>
                                    <img src={item['avatar_url']} alt={'user-image'} width={100}/>
                                    <h1>{item['login']}</h1>
                                    <p className="title"><a href={item['html_url']}>go to user website</a></p>
                                    <button className={'user-info'} onClick={() => this.selectUser(item['login'])}>user info</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default GithubUsers;