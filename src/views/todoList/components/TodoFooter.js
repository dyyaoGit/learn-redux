import React from 'react';
import store from '../../../store';

class TodoFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleChangeStatus = (num) => {
        store.dispatch({type: 'UPDATE_STATUS', status: num})
    }

    render() {
        return (
            <div className="todo-footer">
                <button onClick={() => this.handleChangeStatus(1)}>显示全部</button>
                <button onClick={() => this.handleChangeStatus(2)}>显示未完成</button>
                <button onClick={() => this.handleChangeStatus(3)}>显示已完成</button>
            </div>
        )
    }
}

export default TodoFooter;