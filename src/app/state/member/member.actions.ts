import { createAction, props } from '@ngrx/store';

export const setMember = createAction(
    '[Portfolio Window] Set Member',
    props<{ member : string }>()
)

export const clearMember = createAction(
    '[Image Member] Clear Member'
)

