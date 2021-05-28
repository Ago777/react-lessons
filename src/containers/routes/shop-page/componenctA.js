import React from 'react';
import PropTypes from 'prop-types';

const ComponenctA = props => {
    console.log('COMPONENT A')
    return (
        <div>
            {props.countA}
        </div>
    );
};

ComponenctA.propTypes = {

};

export default ComponenctA;