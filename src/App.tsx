import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import { CounterInstallation } from './components/CounterInstallation';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';
import {
    changeMaxValueAC,
    changeStartValueAC,
    changeValueAC,
    InitialStateType,
} from './redux/main-reducer';

function App() {

    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, InitialStateType>(state => state.counterState)

    let error = state.startValue >= state.maxValue || state.startValue < 0 || state.maxValue < 0

    useEffect(() => {
        const maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            const value = JSON.parse(maxValueAsString)
            dispatch(changeMaxValueAC(value))
        }
        const startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            const value = JSON.parse(startValueAsString)
            dispatch(changeStartValueAC(value))
            dispatch(changeValueAC(value))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
    }, [state.maxValue])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
    },[state.startValue])
    console.log(state.messagePointer)

    return (
        <div className='appWrapper'>
            <CounterInstallation
                error={error}
            />
            <Counter
                error={error}
            />

        </div>
    );
}

export default App;
