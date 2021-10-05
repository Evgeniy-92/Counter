const initialState = {
    value: 0,
    startValue: 5,
    maxValue: 0,
    messagePointer: false
}

export type InitialStateType = typeof initialState

export const mainReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-START-VALUE':
            return {
                ...state, startValue: action.value
            }
        case 'CHANGE-MAX-VALUE':
            return {
                ...state, maxValue: action.value
            }
        case 'CHANGE-VALUE':
            return {
                ...state, value: action.value
            }
        case 'INCREMENT-VALUE':
            return {
                ...state, value: action.value + 1
            }
        case 'MESSAGE-OFF':
            return {
                ...state, messagePointer: false
            }
        case 'MESSAGE-ON':
            return {
                ...state, messagePointer: true
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof changeValueAC> | ReturnType<typeof incValueAC> | ReturnType<typeof changeStartValueAC> | ReturnType<typeof changeMaxValueAC> | ReturnType<typeof messageOffAC> | ReturnType<typeof messageOn>



export const changeValueAC = (newValue: number) => {
    return {
        type: 'CHANGE-VALUE',
        value: newValue,
    } as const
}

export const incValueAC = (newValue: number) => {
    return {
        type: 'INCREMENT-VALUE',
        value: newValue
    } as const
}

export const changeStartValueAC = (newValue: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        value: newValue,
    } as const
}

export const changeMaxValueAC = (newValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        value: newValue,
    } as const
}

export const messageOffAC = () => {
    return {
        type: 'MESSAGE-OFF',
    } as const
}

export const messageOn = () => {
    return {
        type: 'MESSAGE-ON',
    } as const
}
