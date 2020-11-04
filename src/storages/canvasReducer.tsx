const InitialState = {
    width: '500',
    height: '500'
}

export const canvasReducer = (state = InitialState, action: any) => {
    return { ...state }
}