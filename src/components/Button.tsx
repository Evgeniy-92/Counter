import React from 'react';

type ButtonPropsType = {
    valueBtn: string
    disabledBtn: boolean
    classNameBtn: string
    onClickBtn: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <button className={props.classNameBtn}
                onClick={() => {
                    props.onClickBtn()
                }}
                disabled={props.disabledBtn}>
            {props.valueBtn}
        </button>
    )
}