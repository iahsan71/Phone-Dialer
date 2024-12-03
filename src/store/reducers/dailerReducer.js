const initialState = {
    dialedNumber: "",
    callHistory: [],
};

const dialerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DIALED_NUMBER":
            return {
                ...state,
                dialedNumber: action.payload,
            };
        case "ADD_CALL":
            return {
                ...state,
                callHistory: [...state.callHistory, action.payload],
            };
        case "DELETE_CALL":
            return {
                ...state,
                callHistory: state.callHistory.filter(
                    (call) => call.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default dialerReducer;
