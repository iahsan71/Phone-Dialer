export const setDialedNumber = (number) => {
    return {
        type: "SET_DIALED_NUMBER",
        payload: number,
    };
};

export const addCall = (call) => {
    return {
        type: "ADD_CALL",
        payload: call,
    };
};

export const deleteCall = (id) => {
    return {
        type: "DELETE_CALL",
        payload: id,
    };
};
