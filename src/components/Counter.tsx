import React from 'react';
import s from './Counter.module.css'
import {Button} from './Button';

type CounterPropsType = {
    value: number
    maxValue: number
    startValue: number
    callbackIncValue: () => void
    callbackResetValue: () => void
    error: boolean
    message: boolean
}

export function Counter(props: CounterPropsType) {
    const btnIncStyle = props.value === props.maxValue || props.error || props.message ? `${s.button} ${s.disabledBtn}` : s.button
    const btnResetStyle = props.value === props.startValue || props.error || props.message ? `${s.button} ${s.disabledBtn}` : s.button

    const disInc = props.value === props.maxValue || props.error || props.message
    const disReset = props.value === props.startValue || props.error || props.message
    const valueStyle = props.value === props.maxValue ? `${s.value} ${s.maxValue}` : s.value

    let message = <span>{props.value}</span>
    if (props.message) {
        message = <span className={s.message}>enter values and press 'set'</span>
    }
    if (props.error) {
        message = <span className={s.error}>Incorrect value!</span>
    }

    return (
        <div className={s.counterWrapper}>
            <div className={valueStyle}>{message}</div>
            <div className={s.buttons}>
                <Button valueBtn={'inc'}
                        disabledBtn={disInc}
                        classNameBtn={btnIncStyle}
                        onClickBtn={props.callbackIncValue}
                />
                <Button valueBtn={'reset'}
                        disabledBtn={disReset}
                        classNameBtn={btnResetStyle}
                        onClickBtn={props.callbackResetValue}
                />
            </div>
        </div>
    )
}
