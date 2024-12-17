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

export const fetchCalls =
    (lastDocument = null, onComplete = () => {}) =>
    async (dispatch) => {
        try {
            let query = firebase
                .firestore()
                .collection("calls")
                .orderBy("time");

            if (lastDocument) {
                query = query.startAfter(lastDocument);
            }

            const document = await query.limit(2).get();

            let tempData = [];
            document.forEach((doc) => {
                tempData.push({ ...doc.data(), id: doc.id });
            });

            dispatch({
                type: lastDocument ? "FETCH_CALLS_MORE" : "FETCH_CALLS",
                payload: {
                    data: tempData,
                    lastDocument: document.docs[tempData.length - 1],
                    hasMoreDocument: tempData.length >= 2,
                },
            });

            onComplete(); // Stop loading
        } catch (error) {
            console.error("Error fetching calls:", error);
            onComplete();
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
