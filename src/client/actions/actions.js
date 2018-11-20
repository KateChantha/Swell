import * as types from './actionTypes'

//BUSINESS LOGIC ACTIONS
export const reqResClear = () => ({
  type: types.REQRES_CLEAR,
});

export const reqResAdd = (reqRes) => ({
  type: types.REQRES_ADD,
  payload : reqRes
});

export const reqResDelete = (reqRes) => ({
  type: types.REQRES_DELETE,
  payload : reqRes
});

export const reqResUpdate = (reqRes) => ({
  type: types.REQRES_UPDATE,
  payload : reqRes
});

export const setWarningModalMessage = (message) => ({
  type: types.SET_WARNING_MODAL_MESSAGE,
  payload : message
});

//UI ACTIONS
export const showModal = () => ({
  type: types.SHOW_MODAL,
});

export const hideModal = () => ({
  type: types.HIDE_MODAL,
});

export const setModalDisplay = (modalDisplay) => ({
  type: types.SET_MODAL_DISPLAY,
  payload : modalDisplay
});








