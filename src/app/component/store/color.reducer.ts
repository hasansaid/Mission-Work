import { createReducer, on } from '@ngrx/store';
import { changeColor } from './color.actions';

export const initialState = 0;

export const colorReducer = createReducer(
  initialState,
  on(changeColor, (state, action) => {
    return action.payload;
  })
);
