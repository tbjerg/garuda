import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from "redux-form"
import counter, { TState as TCounterState } from './counter';

const rootReducer = combineReducers({
  counter,
  routing: routing as Reducer<any>,
  form: formReducer,
});

export interface IState {
  counter: TCounterState;
}

export default rootReducer;
