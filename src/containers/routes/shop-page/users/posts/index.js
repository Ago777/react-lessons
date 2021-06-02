import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const Posts = props => {

    // const getPosts = (id) => {
    //     togglePending(true);
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    //         .then(response => response.json())
    //         .then((result => {
    //             setComments(result)
    //             togglePending(false);
    //         }))
    //         .catch(err => console.log(err))
    // }

    if (props.isPostsPending) {
        return <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
        />
    }

    return (
        <div>
            {
                props.posts.map(item => {
                    return (
                        <div style={{border: '1px solid black', background: 'red'}}>
                            <h1>{item.title}</h1>
                            <div>{item.body}</div>
                            <div>Show Comments</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

Posts.propTypes = {};

export default Posts;