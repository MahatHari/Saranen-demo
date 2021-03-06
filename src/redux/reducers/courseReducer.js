import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function courseReducer(state = initalState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }]; // creates all state array and adds whats passed from action
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
