import { HANDLE_CHANGE, HANDLE_ADD, HANDLE_DELETE, GET_LIST } from './action';

const defaultState = {
    inputValue: '',
    list: [],
};

const reducer = (state = defaultState, action) => {
    // state只能接收不能改变
    let newState = JSON.parse(JSON.stringify(state));
    if (action.type === HANDLE_CHANGE) {
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === HANDLE_ADD) {
        newState.list.push(action.value);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === HANDLE_DELETE) {
        newState.list.splice(action.value, 1);
        return newState;
    }
    if (action.type === GET_LIST) {
        newState.list = action.value;
        return newState;
    }
    return state;
};

export default reducer;