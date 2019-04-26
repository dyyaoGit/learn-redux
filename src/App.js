import React from 'react';
import ReduxWithCount from './components/ReduxWithCount';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TodoList from './views/todoList'

function App(props) {
    return (
        <Router>
            <div className="App">
                <Route path="/reduxWidthCount" component={ReduxWithCount} />
                <Route path="/TodoList" component={TodoList} />
            </div>
        </Router>

    );
}

export default App;
