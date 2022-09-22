import { ActionReducer } from "@ngrx/store";
import { windowsReducer } from "./windows/windows.reducer";

export interface AppState {
    windows : ActionReducer<string[]>
}

export let appState : AppState = {
    windows : windowsReducer
}