import firebase from "../../config/firebase";

export const setDialedNumber = (number) => {
    return {
        type: "SET_DIALED_NUMBER",
        payload: number,
    };
};

export const addCall = (call) => async (dispatch) => {
    try {
        await firebase.firestore().collection("calls").add(call);
        console.log("Call added successfully:", call);
    } catch (error) {
        console.error("Error adding call:", error);
    }
};

export const fetchCalls = () => async (dispatch) => {
    try {
        const query = await firebase.firestore().collection("calls").get();
        let tempData = [];
        query.forEach((doc) => {
            tempData.push({ ...doc.data(), id: doc.id });
        });
        dispatch({
            type: "FETCH_CALLS",
            payload: tempData,
        });
    } catch (error) {
        console.error("Error fetching calls:", error);
    }
};

export const deleteCall = (id) => async (dispatch) => {
    try {
        await firebase.firestore().collection("calls").doc(id).delete();
        dispatch({
            type: "DELETE_CALL",
            payload: id,
        });
    } catch (error) {
        console.error("Error deleting call:", error);
    }
};
