import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';

function App() {

    let [value, setValue] = useState<number>(0)

    const incValue = () => {
        debugger
        value++
        setValue(value)
    }

    const resetValue = () => {
        value = 0
        setValue(value)
    }

    return (
        <div className='appWrapper'>
            <Counter value={value}
                     incValue={incValue}
                     resetValue={resetValue}/>
        </div>
    );
}

export default App;
