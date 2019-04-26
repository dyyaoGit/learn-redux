import React from 'react';
import Header from './components/TodoHeader';
import Body from './components/TodoBody';
import Footer from './components/TodoFooter';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="todo">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default TodoList;