import {
  ADD_SCHEDULE,
  CLEAR_SCHEDULES,
  EDIT_SCHEDULE,
  DELETE_SCHEDULE,
  LOAD_SCHEDULES,
} from './actions';

function schedules(state = [], action) {
  switch (action.type) {
    case ADD_SCHEDULE:
      return [
        ...state,
        {
          ...action.item,
        },
      ];
    case EDIT_SCHEDULE:
      return state.map(
        item =>
          item.pk === action.item.pk
            ? {
                ...action.item,
              }
            : item,
      );
    case DELETE_SCHEDULE:
      return state.filter(item => item.pk !== action.pk);
    case CLEAR_SCHEDULES:
      return [];
    case LOAD_SCHEDULES:
      return action.items;
    default:
      return state;
  }
}

export default schedules;
