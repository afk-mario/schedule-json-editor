import { v4 } from 'uuid';
export const ADD_TYPE = 'ADD_TYPE';

export function addType(item) {
  return {
    type: ADD_TYPE,
    item: {
      pk: v4(),
      ...item,
    },
  };
}

export const CLEAR_TYPES = 'CLEAR_TYPES';
export function clearTypes() {
  return {
    type: CLEAR_TYPES,
  };
}

export const EDIT_TYPE = 'EDIT_TYPE';
export function editType(item) {
  return {
    type: EDIT_TYPE,
    item,
  };
}

export const DELETE_TYPE = 'DELETE_TYPE';
export function deleteType(pk) {
  return {
    type: DELETE_TYPE,
    pk,
  };
}

export const LOAD_TYPES = 'LOAD_TYPES';
export function loadTypes(items) {
  return {
    type: LOAD_TYPES,
    items,
  };
}
