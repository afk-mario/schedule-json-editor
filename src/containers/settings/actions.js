export const SET_SERVER_IP = 'SET_SERVER_IP';
export function setServerIp(ip) {
  return {
    type: SET_SERVER_IP,
    ip,
  };
}
