export const userState = {
  users: [],
  loading: true,
  message: ''
}

export const ADD_RECEIVED = 'ADD_RECEIVED'
export const ADD_REQUEST = 'ADD_REQUEST'
export const RESULTS_RECEIVED = 'RESULTS_RECEIVED'
export const RESULTS_REQUEST = 'RESULTS_REQUEST'
export const EDIT_RECEIVED = 'EDIT_RECEIVED'
export const EDIT_REQUEST = 'EDIT_REQUEST'
export const DELETE_RECEIVED = 'DELETE_RECEIVED'
export const DELETE_REQUEST = 'DELETE_REQUEST'
export const UPDATE_RECEIVED = 'UPDATE_RECEIVED'
export const UPDATE_REQUEST = 'UPDATE_REQUEST'
export const CLEANUP_RECEIVED = 'CLEANUP_RECEIVED'
export const CLEANUP_REQUEST = 'CLEANUP_REQUEST'

export const addActionCreator = (type, payload) => {
  return {
    type,
    payload: { ...payload }
  }
}

export const resultsActionCreator = (type) => {
  return {
    type
  }
}

export const editActionCreator = (type, payload) => {
  return {
    type,
    payload: { ...payload }
  }
}

export const deleteActionCreator = (type, payload) => {
  return {
    type,
    payload: { ...payload }
  }
}

export const updateActionCreator = (type, payload) => {
  return {
    type,
    payload: { ...payload }
  }
}

export const cleanupActionCreator = (type) => {
  return {
    type
  }
}
