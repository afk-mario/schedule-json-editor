import {
  ADD_TYPE,
  CLEAR_TYPES,
  EDIT_TYPE,
  DELETE_TYPE,
  LOAD_TYPES,
} from './actions';

function types(state = [], action) {
  switch (action.type) {
    case ADD_TYPE:
      return [
        ...state,
        {
          ...action.item,
        },
      ];
    case EDIT_TYPE:
      return state.map(
        item =>
          item.pk === action.item.pk
            ? {
                ...action.item,
              }
            : item,
      );
    case DELETE_TYPE:
      return state.filter(item => item.pk !== action.pk);
    case CLEAR_TYPES:
      return [];
    case LOAD_TYPES:
      return action.items;
    default:
      return state;
  }
}

export default types;
