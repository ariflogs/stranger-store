import {actionTypes} from './actionTypes'

export const createUserAction = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
})