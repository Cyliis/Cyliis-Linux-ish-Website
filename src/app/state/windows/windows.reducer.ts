import { createReducer, on } from '@ngrx/store'
import { addWindow, removeWindow } from './windows.actions';

export const initialState : Array<string> = [];

export const windowsReducer = createReducer(
    initialState,

    on(addWindow, (state, action) => [...state, action.window] ),

    on(removeWindow, (state, action) => [...(state.filter(item => item !== action.window))])

)