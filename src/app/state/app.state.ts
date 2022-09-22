import { ActionReducer } from "@ngrx/store";
import {minimizedsReducer } from "./minimizeds/minimizeds.reducer";
import { windowsReducer } from "./windows/windows.reducer";

export interface AppState {
    windows : ActionReducer<string[]>,
    minimizeds : ActionReducer<string[]>
}

export let appState : AppState = {
    windows : windowsReducer,
    minimizeds : minimizedsReducer
}