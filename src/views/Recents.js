import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "reactstrap";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { deleteCall, fetchCalls } from "../store/actions/dialerAction";

function Recents() {
    const callHistory = useSelector((state) => state.dailer.calls);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("missed");
    useEffect(() => {
        dispatch(fetchCalls());
        setLoading(false);
    }, []);
    const handleDelete = (id) => {
        dispatch(deleteCall(id));
    };

    return (
        <Container className="recent-container d-flex flex-column min-vh-80 mt-4">
            <div className="w-100 d-flex justify-content-start px-3">
                <h6 className="edit-button">Edit</h6>
            </div>

            <div className="tabs-container d-flex justify-content-center mt-2">
                <button
                    className={`tab ${activeTab === "all" ? "active" : ""}`}
                    onClick={() => setActiveTab("all")}
                >
                    All
                </button>
                <button
                    className={`tab ${activeTab === "missed" ? "active" : ""}`}
                    onClick={() => setActiveTab("missed")}
                >
                    Missed
                </button>
            </div>

            <div className="w-100 d-flex justify-content-start px-3 mt-2 text-white">
                <h5>Recents</h5>
            </div>

            <div className="call-history flex-grow-1 overflow-auto mt-3 w-100">
                {loading ? (
                    <div className="text-center">
                        <Spinner color="primary" />
                        <p className="text-muted mt-2">Loading calls...</p>
                    </div>
                ) : callHistory.length === 0 ? (
                    <p className="text-center text-muted">No recent calls</p>
                ) : (
                    callHistory.map((call) => (
                        <div
                            key={call.id}
                            className="call-card d-flex justify-content-between align-items-center px-3 py-2 my-2"
                        >
                            <div className="call-info">
                                <h6 className="call-number mb-1 text-danger">
                                    {call.number}
                                </h6>
                                <p className="call-description mb-0 text-white">
                                    Phone audio call
                                </p>
                            </div>
                            <p className="call-time mb-3 text-muted">
                                {call.time}
                            </p>
                            <Button
                                className="delete-button text-danger bg-dark border-dark"
                                onClick={() => handleDelete(call.id)}
                            >
                                <i className="fa-solid fa-trash"></i>
                            </Button>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </Container>
    );
}

export default Recents;
