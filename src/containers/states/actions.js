import { v4 } from 'uuid';
export const ADD_STATE = 'ADD_STATE';

export function addState(item) {
  return {
    type: ADD_STATE,
    item: {
      pk: v4(),
      ...item,
    },
  };
}

export const CLEAR_STATES = 'CLEAR_STATES';
export function clearStates() {
  return {
    type: CLEAR_STATES,
  };
}

export const EDIT_STATE = 'EDIT_STATE';
export function editState(item) {
  return {
    type: EDIT_STATE,
    item,
  };
}

export const DELETE_STATE = 'DELETE_STATE';
export function deleteState(pk) {
  return {
    type: DELETE_STATE,
    pk,
  };
}

export const LOAD_STATES = 'LOAD_STATES';
export function loadStates(items) {
  return {
    type: LOAD_STATES,
    items,
  };
}
