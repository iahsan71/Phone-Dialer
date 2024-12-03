import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Container, Row, Col, Button, Label } from "reactstrap";
import { addCall } from "../store/actions/dialerAction";

function Dialing({ dialedNumber }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const endCall = () => {
        const call = {
            id: Date.now(),
            number: dialedNumber,
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };
        console.log(call.id);
        dispatch(addCall(call));

        console.log(call);
        history.push("/recents");
    };

    useEffect(() => {
        setTimeout(() => {
            endCall();
        }, 10000);
    }, []);

    return (
        <Container className="dialing-container d-flex flex-column justify-content-between align-items-center mt-5">
            <div className="info-icon">
                <i className="fa-solid fa-circle-info"></i>
            </div>

            <div className="call-screen text-center mt-2">
                <p>calling mobile...</p>
                <h4>{dialedNumber}</h4>
            </div>

            <div className="icon-section w-100">
                <Row className="mb-3">
                    <Col className="text-center">
                        <Button className="callKeys">
                            <i className="fa-solid fa-volume-high"></i>
                        </Button>
                        <Label>Speaker</Label>
                    </Col>
                    <Col className="text-center">
                        <Button className="callKeys" disabled>
                            <i className="fa-solid fa-video"></i>
                        </Button>
                        <Label>Video</Label>
                    </Col>
                    <Col className="text-center">
                        <Button className="callKeys">
                            <i className="fa-solid fa-microphone"></i>
                        </Button>
                        <Label>Mute</Label>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button className="callKeys" disabled>
                            <i className="fa-solid fa-user-plus"></i>
                        </Button>
                        <Label>Add</Label>
                    </Col>
                    <Col className="text-center">
                        <Button className="callKeys1" onClick={endCall}>
                            <i className="fa-solid fa-phone-slash"></i>
                        </Button>
                        <Label>End</Label>
                    </Col>
                    <Col className="text-center">
                        <Button className="callKeys">
                            <i className="fa-solid fa-braille"></i>
                        </Button>
                        <Label>Keypad</Label>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Dialing;
