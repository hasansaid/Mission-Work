import { createAction } from '@ngrx/store';

export const changeColor = createAction(
  '[Color Component] changeColor',
  (color: number) => {
    return {
      payload: color,
    };
  }
);
