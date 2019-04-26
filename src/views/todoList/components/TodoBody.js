import React from 'react';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';


class TodoBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="todo-body">
                <ol>
                    {
                        this.props.todoArr.map((item, index) => {
                            if(this.props.status === 1){
                                return <TodoItem item={item} index={index} key={index} />
                            } else if(this.props.status.status === 2){
                                return !item.isDone?<TodoItem item={item} index={index} key={index} />: null
                            } else if(this.props.status.status === 3) {
                                return item.isDone?<TodoItem item={item} index={index} key={index} />: null
                            }

                        })
                    }
                </ol>
            </div>
        )
    }
}

const TodoContain = connect(
    function (state) {
        console.log(state);
        return {
            todoArr: state.arr,
            status: state.status
        }
    }
)(TodoBody)

export default TodoContain;