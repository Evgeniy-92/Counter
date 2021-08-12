import React from 'react';
import s from './Counter.module.css'
import {Button} from './Button';

type CounterPropsType = {
    value: number
    incValue: () => void
    resetValue: () => void
}

export function Counter(props: CounterPropsType) {

    const btnIncStyle = props.value === 5 ? `${s.button} ${s.disabledBtn}` : s.button
    const btnResetStyle = props.value === 0 ? `${s.button} ${s.disabledBtn}` : s.button
    const maxValueStyle = props.value === 5 ? `${s.value} ${s.maxValue}` : s.value
    const disInc = props.value === 5 ? true : false
    const disReset = props.value === 0 ? true : false

    return (
        <div className={s.counterWrapper}>
            <div className={maxValueStyle}>{props.value}</div>
            <div className={s.buttons}>
                <Button valueBtn={'inc'}
                        disabledBtn={disInc}
                        classNameBtn={btnIncStyle}
                        onClickBtn={props.incValue}
                />
                <Button valueBtn={'reset'}
                        disabledBtn={disReset}
                        classNameBtn={btnResetStyle}
                        onClickBtn={props.resetValue}
                />
            </div>
        </div>
    )
}

