import React, {Component} from 'react';

class Users extends Component {
    render() {
        return (
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        this.props.users.map(item => {
                            return (
                                <div className="card">
                                    <img alt={'user-image'} width={100}/>
                                    <h1>fgdgdfg</h1>
                                    <p className="title">hfgh</p>
                                    <button className={'user-info'}
                                            onClick={() => this.props.getUserPosts(item.id)}>Posts
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
        );
    }
}

Users.propTypes = {};

export default Users;