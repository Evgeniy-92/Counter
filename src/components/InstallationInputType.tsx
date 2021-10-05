import s from './Counter.module.css';
import React, { ChangeEvent } from 'react';

type InstallationInputType = {
    setPoint: string
    value: number
    changeValue: (newValue: number) => void
    error: boolean
}
export const InstallationInput = (props: InstallationInputType) => {
    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        props.changeValue(value);
    }

    const inputFinishStyle = props.error ? `${s.inputStyle} ${s.errorInput}` : s.inputStyle
    return (
        <div className={s.installationInputStyle}>
            <span>{props.setPoint}:</span>
            <input type='number' className={inputFinishStyle} value={props.value} onChange={changeValueHandler}/>
        </div>
    )
}