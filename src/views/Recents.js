import React, { useEffect, useState } from "react";
import { Container, Button, Spinner, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { deleteCall, fetchCalls } from "../store/actions/dialerAction";

function Recents() {
    const { calls, lastDocument, hasMoreDocument } = useSelector(
        (state) => state.dailer
    );
    console.log(calls, lastDocument, hasMoreDocument);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [activeTab, setActiveTab] = useState("missed");
    useEffect(() => {
        setLoading(true);
        dispatch(
            fetchCalls("", () => {
                setLoading(false);
            })
        );
    }, []);
    const handleDelete = (id) => {
        dispatch(deleteCall(id));
    };
    const loadMore = () => {
        setIsLoading(true);
        dispatch(
            fetchCalls(lastDocument, () => {
                setIsLoading(false);
            })
        );
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
                    </div>
                ) : calls.length === 0 ? (
                    <p className="text-center text-muted">No recent calls</p>
                ) : (
                    calls.map((call) => (
                        <>
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
                        </>
                    ))
                )}
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <Button
                        color="primary"
                        size="sm"
                        className="outline-none"
                        disabled={!hasMoreDocument}
                        onClick={() => loadMore()}
                    >
                        {isLoading ? <Spinner size="sm" /> : "Load More"}
                    </Button>
                </div>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </Container>
    );
}

export default Recents;
