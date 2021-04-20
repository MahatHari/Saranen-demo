export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, { ...action.course }]; // creates all state array and adds whats passed from action
    default:
      return state;
  }
}
