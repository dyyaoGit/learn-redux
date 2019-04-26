import React from 'react';
import store from '../../../store';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    toggleTodo = (index) => {
        store.dispatch({type: "TOGGLE_TODO", index})
    }

    removeTodo = (index) => {
        store.dispatch({type: "REMOVE_TODO", index})
    }

    doubleClick = () => {
        const index = this.props.index;
        store.dispatch({type: "TOGGLE_EDITOR", index});
    }

    handleChange = (e) => {
        const index = this.props.index;
        store.dispatch({type: "UPDATE_TEXT", index, text: e.target.value})
    }

    render() {
        const {item, index} = this.props;
        return (
            <li>
                {
                    !item.isEdit ?
                        (
                            <div>
                    <span className={item.isDone ? 'done' : ''} onClick={() => {
                        this.toggleTodo(index)
                    }}
                          onDoubleClick={this.doubleClick}
                    >{item.text}</span>
                                <button onClick={() => {
                                    this.removeTodo(index)
                                }}>删除该todo
                                </button>
                            </div>
                        ) :
                        (
                            <div>
                                <input type="text" ref="input" value={item.text} onChange={this.handleChange} onBlur={this.doubleClick} />
                            </div>
                        )

                }
            </li>
        )
    }
}

export default TodoItem;