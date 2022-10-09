import { createReducer, on } from '@ngrx/store'
import { addWindow, removeWindow, setInFront } from './windows.actions';

export const initialState : Array<string> = [];

// export const initialState1 : Array<any> = [
//     {
//         name : 'gallery',
//         showName : 'Gallery',
//         opened : false,
//         minimalized : false
//     },
//     {
//         name : 'alumni',
//         showName : 'Alumni',
//         opened : false,
//         minimalized : false
//     },
//     {
//         name : 'team',
//         showName : 'Team',
//         opened : false,
//         minimalized : false
//     },
//     {
//         name : 'cl',
//         showName : 'CyCL',
//         opened : false,
//         minimalized : false
//     },
//     {
//         name : 'settings',
//         showName : 'Settings',
//         opened : false,
//         minimalized : false
//     },
//     {
//         name : 'image',
//         showName : 'Image',
//         opened : false,
//         minimalized : false
//     },
//     {
//         name : 'portfolio',
//         showName : 'Portfolio',
//         isOpen : false,
//         isMinimalized : false
//     },
// ]

// export const windowsReducer1  = createReducer(
//     initialState1,

//     on(addWindow, (state, action) => {
//         return initialState1.map(window => {
//             if (window.name == action.window) {
//                 window.isOpen = true
//                 window.isMinimalized = false
//             }
//         })
//     }),

//     on(removeWindow, (state, action) => {
//         return initialState1.map(window => {
//             if (window.name == action.window) {
//                 window.isOpen = false
//                 window.isMinimalized = false
//             }
//         })
//     }),

//     on(setInFront, (state, action) => {
//         return initialState1.map(window => {
//             if (window.name == action.window) {
//                 window.isOpen = false
//                 window.isMinimalized = false
//             }
//         })
//     }),
// )

export const windowsReducer = createReducer(
    initialState,

    on(addWindow, (state, action) => [...new Set([...state, action.window])] ),

    on(removeWindow, (state, action) => [...state.filter(item => item !== action.window)]),

    on(setInFront, (state, action) : any => {
        return [...state.filter(item => item !== action.window), action.window]
    })
)