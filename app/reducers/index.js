import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import inspector from './inspector';

const rootReducer = combineReducers({
    inspector,
    routing
});

export default rootReducer;
