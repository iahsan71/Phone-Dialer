import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import Footer from "../components/Footer";
import Dialing from "./Dialing";
import { toast } from "react-toastify";
import { setDialedNumber } from "../store/actions/dialerAction";

function Dialer() {
    const [input, setInput] = useState("");
    const [showDialer, setShowDialer] = useState(true);

    const dispatch = useDispatch();
    const dialedNumber = useSelector((state) => state.dailer.dialedNumber);

    const handleInput = (value) => {
        setInput((prev) => prev + value);
    };

    const clearInput = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleCall = () => {
        if (input) {
            dispatch(setDialedNumber(input));
            setShowDialer(false);
        } else {
            toast.error("Please enter a number to call.");
        }
    };

    return (
        <>
            {showDialer ? (
                <Container className="dialer-container mt-3">
                    <div className="screen mb-4 text-center mt-4">
                        <h4>{input || ""}</h4>
                        <h6>Add Number</h6>
                    </div>
                    <div className="keypad">
                        <Row className="my-2">
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("1")}
                                >
                                    1
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("2")}
                                >
                                    2<br />
                                    <span>ABC</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("3")}
                                >
                                    3<br />
                                    <span>DEF</span>
                                </Button>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("4")}
                                >
                                    4<br />
                                    <span>GHI</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("5")}
                                >
                                    5<br />
                                    <span>JKL</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("6")}
                                >
                                    6<br />
                                    <span>MNO</span>
                                </Button>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("7")}
                                >
                                    7<br />
                                    <span>PQRS</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("8")}
                                >
                                    8<br />
                                    <span>TUV</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("9")}
                                >
                                    9<br />
                                    <span>WXYZ</span>
                                </Button>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("*")}
                                >
                                    *
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("0")}
                                >
                                    0<br />
                                    <span>+</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="key"
                                    onClick={() => handleInput("#")}
                                >
                                    #
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    <div className="action-buttons mt-4">
                        <Row>
                            <Col className="text-center"></Col>
                            <Col className="text-center">
                                <Button
                                    className="call-button"
                                    onClick={handleCall}
                                >
                                    <i className="fa-solid fa-phone"></i>
                                </Button>
                            </Col>
                            <Col className="text-center">
                                <Button
                                    className="clear-button"
                                    onClick={clearInput}
                                >
                                    <i className="fa-solid fa-delete-left"></i>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <Footer />
                </Container>
            ) : (
                <Dialing dialedNumber={dialedNumber} />
            )}
        </>
    );
}

export default Dialer;
