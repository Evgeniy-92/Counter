import React from 'react';
import s from './Counter.module.css'
import {Button} from './Button';
import {InstallationInput} from './InstallationInputType';

type CounterPropsType = {
    startValue: number
    maxValue: number
    callbackIncValue: () => void
    callbackResetValue: () => void
    callbackChangeStartValue: (newValue: number) => void
    callbackChangeMaxValue: (newValue: number) => void
    getStartValueHandler: () => void
    error: boolean
    message: boolean
}

export function Counter1(props: CounterPropsType) {
    const btnSetStyle = props.error || props.message === false ? `${s.button} ${s.disabledBtn}` : s.button
    return (
        <div className={s.counterWrapper}>
            <div className={s.value}>
               <InstallationInput
                   changeValue={props.callbackChangeMaxValue}
                   value={props.maxValue}
                   setPoint={'max value'}
                   error={props.error}
               />
               <InstallationInput
                   changeValue={props.callbackChangeStartValue
                   } value={props.startValue}
                   setPoint={'start value'}
                   error={props.error}
               />
            </div>
            <div className={s.buttons}>
                <Button
                    valueBtn={'set'}
                    disabledBtn={props.error}
                    classNameBtn={btnSetStyle}
                    onClickBtn={props.getStartValueHandler}
                />
            </div>
        </div>
    )
}


