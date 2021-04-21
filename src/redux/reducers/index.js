import { combineReducers } from 'redux';
import courses from './courseReducer';
import 'core-js/stable';
import 'regenerator-runtime';

const rootReducer = combineReducers({
  courses: courses,
});
export default rootReducer;
