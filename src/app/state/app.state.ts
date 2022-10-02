import { ActionReducer } from "@ngrx/store";
import { imageReducer } from "./image/image.reducer";
import { memberReducer } from "./member/member.reducer";
import {minimizedsReducer } from "./minimizeds/minimizeds.reducer";
import { windowsReducer } from "./windows/windows.reducer";

export interface AppState {
    windows : ActionReducer<string[]>,
    minimizeds : ActionReducer<string[]>,
    image : ActionReducer<string>,
    member : ActionReducer<any>
}

export let appState : AppState = {
    windows : windowsReducer,
    minimizeds : minimizedsReducer,
    image : imageReducer,
    member : memberReducer
}