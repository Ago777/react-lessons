import React from 'react';
import PropTypes from 'prop-types';
import ComponenctC from "./componenctC";

const ComponenctB = props => {
    console.log('COMPONENT B')
    return (
        <div>
            {props.countB}
            <ComponenctC countC={props.countC}/>
        </div>
    );
};

ComponenctB.propTypes = {

};

export default ComponenctB;