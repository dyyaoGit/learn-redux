import React from 'react';
import store from '../store/index';

class ReduxWithCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    increment = () => {
        store.dispatch({type: "INCREMENT" })
    }

    decrement = () => {
        store.dispatch({type: "DECREMENT"})
    }

    incrementWhenOdd = () => {
        const state = store.getState();
        if(state % 2 == 1){
            this.increment();
        }
    }

    incrementWhenAsync = () => {
        setTimeout(() => {
            this.increment();
        }, 1000)
    }

    render() {
        return (
            <div className="learn-redux">
                点击了多少次: {this.props.storeState.count}
                {" "}
                <button onClick={this.increment}>++</button>{" "}
                <button onClick={this.incrementWhenOdd}>increment when odd</button>{" "}
                <button onClick={this.decrement}>--</button>{" "}
                <button onClick={this.incrementWhenAsync}>async 增加</button>{" "}

                <h2>{store.getState().text}</h2>
            </div>
        )
    }
}

export default ReduxWithCount;