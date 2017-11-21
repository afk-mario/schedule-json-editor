import {
  ADD_STATE,
  CLEAR_STATES,
  EDIT_STATE,
  DELETE_STATE,
  LOAD_STATES,
} from './actions';

function states(state = [], action) {
  switch (action.type) {
    case ADD_STATE:
      return [
        ...state,
        {
          ...action.item,
        },
      ];
    case EDIT_STATE:
      return state.map(
        item =>
          item.pk === action.item.pk
            ? {
                ...action.item,
              }
            : item
      );
    case DELETE_STATE:
      return state.filter(item => item.pk !== action.pk);
    case CLEAR_STATES:
      return [];
    case LOAD_STATES:
      return action.items;
    default:
      return state;
  }
}

export default states;
