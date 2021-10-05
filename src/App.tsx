import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import { Counter1 } from './components/Counter1';

function App() {

    let [value, setValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [message, setMessage] = useState(false)

    let error = startValue >= maxValue || startValue < 0 || maxValue < 0

    useEffect(() => {
        const maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            const value = JSON.parse(maxValueAsString)
            setMaxValue(value)
        }
        const startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            const value = JSON.parse(startValueAsString)
            setStartValue(value)
            setValue(value)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    },[startValue])
    console.log(message)



    const getStartValueHandler = () => {
        const valueAsString = localStorage.getItem('startValue')
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
        setMessage(false)
    }

    const incValue = () => {
        setValue(++value)
    }

    const resetValue = () => {
        setValue(startValue)
    }

    const changeStartValue = (newValue: number) => {
        setStartValue(newValue)
        setMessage(true)
    }

    const changeMaxValue = (newValue: number) => {
        setMaxValue(+newValue)
        setMessage(true)
    }

    return (
        <div className='appWrapper'>
            <Counter1
                startValue={startValue}
                maxValue={maxValue}
                callbackIncValue={incValue}
                callbackResetValue={resetValue}
                callbackChangeStartValue={changeStartValue}
                callbackChangeMaxValue={changeMaxValue}
                getStartValueHandler={getStartValueHandler}
                error={error}
                message={message}
            />
            <Counter
                value={value}
                maxValue={maxValue}
                startValue={startValue}
                callbackIncValue={incValue}
                callbackResetValue={resetValue}
                error={error}
                message={message}
            />

        </div>
    );
}

export default App;
