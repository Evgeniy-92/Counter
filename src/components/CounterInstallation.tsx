import React from 'react';
import s from './Counter.module.css'
import {Button} from './Button';
import {InstallationInput} from './InstallationInputType';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {
    changeMaxValueAC,
    changeStartValueAC,
    changeValueAC,
    InitialStateType,
    messageOffAC,
    messageOn
} from '../redux/main-reducer';

type CounterPropsType = {
    error: boolean
}

export function CounterInstallation(props: CounterPropsType) {

    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, InitialStateType>(state => state.counterState)

    const changeMaxValue = (newValue: number) => {
        dispatch(changeMaxValueAC(newValue))
        dispatch(messageOn())
    }
    const changeStartValue = (newValue: number) => {
        dispatch(changeStartValueAC(newValue))
        dispatch(messageOn())
    }

    const getStartValueHandler = () => {
        const valueAsString = localStorage.getItem('startValue')
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            dispatch(changeValueAC(newValue))
        }
        dispatch(messageOffAC())
    }

    const btnSetStyle = props.error || state.messagePointer === false ? `${s.button} ${s.disabledBtn}` : s.button

    return (
        <div className={s.counterWrapper}>
            <div className={s.value}>
               <InstallationInput
                   changeValue={changeMaxValue}
                   value={state.maxValue}
                   setPoint={'max value'}
                   error={props.error}
               />
               <InstallationInput
                   changeValue={changeStartValue}
                   value={state.startValue}
                   setPoint={'start value'}
                   error={props.error}
               />
            </div>
            <div className={s.buttons}>
                <Button
                    valueBtn={'set'}
                    disabledBtn={props.error}
                    classNameBtn={btnSetStyle}
                    onClickBtn={getStartValueHandler}
                />
            </div>
        </div>
    )
}


