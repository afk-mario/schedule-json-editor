import { v4 } from 'uuid';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export function addSchedule(item) {
  return {
    type: ADD_SCHEDULE,
    item: {
      pk: v4(),
      ...item,
    },
  };
}

export const CLEAR_SCHEDULES = 'CLEAR_SCHEDULES';
export function clearSchedules() {
  return {
    type: CLEAR_SCHEDULES,
  };
}

export const EDIT_SCHEDULE = 'EDIT_SCHEDULE';
export function editSchedule(item) {
  return {
    type: EDIT_SCHEDULE,
    item,
  };
}

export const DUPLICATE_SCHEDULE = 'DUPLICATE_SCHEDULE';
export function duplicateSchedule(item) {
  const dup = { ...item, pk: v4() };
  return {
    type: DUPLICATE_SCHEDULE,
    item: dup,
  };
}

export const DELETE_SCHEDULE = 'DELETE_SCHEDULE';
export function deleteSchedule(pk) {
  return {
    type: DELETE_SCHEDULE,
    pk,
  };
}

export const LOAD_SCHEDULES = 'LOAD_SCHEDULES';
export function loadSchedules(items) {
  return {
    type: LOAD_SCHEDULES,
    items,
  };
}
