import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {select} from '../../../store/actions';

class Film extends Component {
    render() {
        return (
            <div onClick={() => this.props.select([1,2,3])}>
                <h1>FILMS PAGE SOON</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.LogsReducer.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);