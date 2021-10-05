import {combineReducers, createStore} from 'redux';
import {mainReducer} from './main-reducer';

const rootReducer = combineReducers({
    counterState: mainReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)