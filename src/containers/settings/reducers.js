import { SET_SERVER_IP } from './actions';

function settings(state = {}, action) {
  switch (action.type) {
    case SET_SERVER_IP:
      return {
        ...state,
        serverIp: action.ip,
      };
    case '@@router/LOCATION_CHANGE':
      // console.log(action);
      return state;
    default:
      return state;
  }
}

export default settings;
