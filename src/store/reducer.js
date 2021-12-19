import { combineReducers } from 'redux-immutable';

// 在对应组件下创建对应的文件
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
// import { reducer as playerReducer } from '../pages/player/store';

// Reducer 函数负责生成 State。由于整个应用只有一个 State 对象， 包含所有数据，
// 那么这个 state 必然十分庞大，导致 Reducer 函数也十分庞大，
// 所以可以把 Reducer 函数拆分。不同的函数负责处理不同属性，
// 最终把它们合并成一个大的 Reducer 即可
const cReducer = combineReducers({
  recommend: recommendReducer,
  // player: playerReducer
});

export default cReducer;
