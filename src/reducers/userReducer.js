import * as _ from '../actions/userAction'

export const userReducer = (state = _.userState, action) => {
  switch (action.type) {
    case _.ADD_RECEIVED:
      return { ...state, message: action.payload.message }
    case _.RESULTS_RECEIVED:
      return { ...state, users: action.payload.users, loading: action.payload.loading }
    case _.EDIT_RECEIVED:
      return {
        ...state,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    case _.UPDATE_RECEIVED:
      return { ...state, message: action.payload.message }
    case _.DELETE_RECEIVED:
      return { ...state, message: action.payload.message }
    case _.CLEANUP_RECEIVED:
      return { ...state, firstName: '', lastName: '', message: '', loading: true }
    default:
      return state
  }
}
