import React from 'react';
import TodoBody from '../components/TodoBody';
import {connect} from 'react-redux';

const mapStateToProps = function (state) {
    return {
        arr: state.arr,
        status: state.status
    }
}

const TodoBodyContain = connect(
    mapStateToProps
)(TodoBody);

export default TodoBodyContain;