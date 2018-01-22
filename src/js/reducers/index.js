import { combineReducers } from 'redux';
import { ADD_COUNT } from '../actions';
// store中可以定义页面中的初始状态
const initialState = {
  count: 0
};

// count的初始状态以及处理之后返回的state值
function count(state = initialState.count, action) {
  switch (action.type) {
    case ADD_COUNT:
      return state + 1;
    default:
      return state;
  }
}
const addReducers = combineReducers({
  count
});
export default addReducers;
