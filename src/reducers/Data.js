import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable'
import { signIn } from 'actions'

const initialState = new Map({
  entries: new Map({
    profile: new Map(),
    news: new Map() 
  })
})

export const dataReducer = handleActions({
  [signIn]: (state, action) => {
    return state.setIn(['entries', 'profile'], fromJS(action.payload))
  }

}, initialState)