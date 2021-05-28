import React from 'react';
import PropTypes from 'prop-types';

const ComponenctC = props => {
    console.log('COMPONENT C')
    return (
        <div>
            {props.countC}
        </div>
    );
};

ComponenctC.propTypes = {

};

export default ComponenctC;