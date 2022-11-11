const initialState = {
    data : 0
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                data: state.data + 1
            }
        default:
            return state
    }
}

export default reducer