// import { firestore } from "../firebase";
import firebase from "../../config/firebase";

export const setDialedNumber = (number) => {
    return {
        type: "SET_DIALED_NUMBER",
        payload: number,
    };
};

export const addCall = (call) => async (dispatch) => {
    firebase.firestore().collection("calls").add(call);
    console.log("Call added successfully:", call);

    dispatch({
        type: "ADD_CALL",
        payload: call,
    });
};

export const fetchCalls = () => async (dispatch) => {
    firebase
        .firestore()
        .collection("calls")
        .get()
        .then((query) => {
            let tempData = [];
            query.forEach((i) => {
                tempData.push({ ...i.data(), id: i.id });
            });
            // console.log(tempData);
            dispatch({
                type: "FETCH_CALLS",
                payload: tempData,
            });
        });
};

export const deleteCall = (id) => async (dispatch) => {
    firebase.firestore().collection("calls").doc(id).delete();
    dispatch({
        type: "DELETE_CALL",
        payload: id,
    });
};
