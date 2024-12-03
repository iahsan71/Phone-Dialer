import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import { Button, Col, Row } from "reactstrap";

function Footer() {
    const [activeTab, setActiveTab] = useState("Keypad");
    const history = useHistory();
    const location = useLocation();
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab == "Recents") {
            history.push("/recents");
            setActiveTab(tab);
        } else if (tab == "Keypad") {
            history.push("/");
        }
    };

    useEffect(() => {
        const path = location.pathname;
        if (path === "/recents") {
            setActiveTab("Recents");
        } else {
            setActiveTab("Keypad");
        }
    }, [location]);

    return (
        <div>
            <Row className="mr-2 mt-3 text-center">
                <Col lg="3" sm="3" xs="3">
                    <Button
                        className={`footer-icon ${
                            activeTab === "Favorites" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("Favorites")}
                    >
                        <i className="fa-solid fa-star"></i>
                        <p>Favorites</p>
                    </Button>
                </Col>
                <Col lg="3" sm="3" xs="3">
                    <Button
                        className={`footer-icon ${
                            activeTab === "Recents" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("Recents")}
                    >
                        <i className="fa-solid fa-clock"></i>
                        <p>Recents</p>
                    </Button>
                </Col>
                <Col lg="3" sm="3" xs="3">
                    <Button
                        className={`footer-icon ${
                            activeTab === "Contacts" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("Contacts")}
                    >
                        <i className="fa-solid fa-user"></i>
                        <p>Contacts</p>
                    </Button>
                </Col>
                <Col lg="3" sm="3" xs="3">
                    <Button
                        className={`footer-icon ${
                            activeTab === "Keypad" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("Keypad")}
                    >
                        <i className="fa-solid fa-braille"></i>
                        <p>Keypad</p>
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
