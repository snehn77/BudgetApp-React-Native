import {createStore} from 'redux';
import elementReducers from './budgetApp';

const store = createStore(elementReducers);
export default store;