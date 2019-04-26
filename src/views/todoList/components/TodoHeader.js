import React from 'react';
import store from '../../../store';
import {connect} from 'react-redux';

class TodoHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        console.log(this.props)
    }
    handleAdd = () => {
        const item = {
            text: this.state.text,
            isDone: false,
            isEdit: false
        }
        this.props.addItem(item);
        this.setState({
            text: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>添加todo</button>
            </div>
        )
    }
}

const TodoHeaderContain = connect(
    undefined,
    (dispatch) => {
        return {
            addItem: (item) => {
                dispatch({type: "ADD_TODO", item})
            }
        }
    }
)(TodoHeader)

export default TodoHeaderContain;