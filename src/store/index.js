import { createStore, applyMiddleware, compose } from 'redux';
// 使用 redux-thunk 中间件，改造 store.dispatch, 使得后者可以接受函数作为参数
import thunk from 'redux-thunk';
import reducer from './reducer';
// 在 redux 中集成 devtools 的中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建 store 
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;