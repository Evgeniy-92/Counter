import React from 'react';
import s from './Counter.module.css'
import {Button} from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {changeValueAC, incValueAC, InitialStateType} from '../redux/main-reducer';

type CounterPropsType = {
    error: boolean
}

export function Counter(props: CounterPropsType) {

    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, InitialStateType>(state => state.counterState)

    const incValue = () => {
        dispatch(incValueAC(state.value))
    }

    const resetValue = () => {
        dispatch(changeValueAC(state.startValue))
    }

    const btnIncStyle = state.value === state.maxValue || props.error || state.messagePointer ? `${s.button} ${s.disabledBtn}` : s.button
    const btnResetStyle = state.value === state.startValue || props.error || state.messagePointer ? `${s.button} ${s.disabledBtn}` : s.button

    const disInc = state.value === state.maxValue || props.error || state.messagePointer
    const disReset = state.value === state.startValue || props.error || state.messagePointer
    const valueStyle = state.value === state.maxValue ? `${s.value} ${s.maxValue}` : s.value

    let element = <span>{state.value}</span>
    if (state.messagePointer) {
        element = <span className={s.message}>enter values and press 'set'</span>
    }
    if (props.error) {
        element = <span className={s.error}>Incorrect value!</span>
    }

    return (
        <div className={s.counterWrapper}>
            <div className={valueStyle}>{element}</div>
            <div className={`${s.buttons} ${s.buttonsCounter}`}>
                <Button valueBtn={'inc'}
                        disabledBtn={disInc}
                        classNameBtn={btnIncStyle}
                        onClickBtn={incValue}
                />
                <Button valueBtn={'reset'}
                        disabledBtn={disReset}
                        classNameBtn={btnResetStyle}
                        onClickBtn={resetValue}
                />
            </div>
        </div>
    )
}
