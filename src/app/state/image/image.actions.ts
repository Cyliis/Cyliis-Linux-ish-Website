import { createAction, props } from '@ngrx/store';

export const setImage = createAction(
    '[Image Window] Set Image',
    props<{ image : string }>()
)

export const clearImage = createAction(
    '[Image Window] Clear Image'
)

