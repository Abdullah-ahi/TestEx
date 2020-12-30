import { combineReducers } from 'redux';
import { dataReducer } from './Data';
import { connectRouter } from 'connected-react-router';

export const initReducer = history => combineReducers({
  router: connectRouter(history),
  data: dataReducer
})