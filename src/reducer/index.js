import {combineReducers}  from 'redux';

// export default function count(state = {
//     count: 0,
//     text: '我是一段redux当中的话',
//     arr: [2,4,6]
// }, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return {
//                 ...state
//             };
//         case "DECREMENT":
//             state.count-=1;
//             return state;
//         default:
//             return state
//     }
// }

const initialState = {
    arr: [
        {
            text: '学习redux',
            isDone: false,
            isEdit: false
        }
    ],
    status: 1  // 1 显示全部 2 显示未完成 3 显示已完成
}

function changeTodoStatus (state = 1, action) {
    switch (action.type) {
        case "UPDATE_STATUS":
            return action.status
        default:
            return state
    }
}

function todo (state=[], action) {
    if(action.type === "ADD_TODO"){
        return [...state, action.item]
    } else if(action.type === 'TOGGLE_TODO') {
        const newArr = [...state];
        newArr[action.index].isDone = !newArr[action.index].isDone;
        return newArr
    } else if(action.type === 'REMOVE_TODO'){
        return state.filter((item, index) => index!=action.index)
    } else if(action.type === 'TOGGLE_EDITOR') {
        const newArr = state.map((item,index) => {
            if(index === action.index){
                item.isEdit = !item.isEdit
            }
            return item
        })
        return newArr
    } else if(action.type === 'UPDATE_TEXT') {
        const newArr = [...state];
        newArr[action.index].text = action.text;
        return newArr
    } else {
        return state
    }
}

// function todoApp (state = initialState, action) {
//     return {
//         arr: todo(state.arr, action),
//         status: changeTodoStatus(state.status, action)
//     }
// }
const todoApp = combineReducers ({
    arr: todo,
    status: changeTodoStatus
})


export default todoApp;
