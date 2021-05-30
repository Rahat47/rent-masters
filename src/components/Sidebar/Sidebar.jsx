import {
    faCog,
    faHome,
    faPlusSquare,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div
            className="sidebar d-flex flex-column justify-content-between  py-5 px-4"
            style={{ height: "600px" }}
        >
            <ul className="list-unstyled ">
                <li>
                    <Link to="/" className="text-dark">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/dashboard" className="text-dark">
                            <FontAwesomeIcon icon={faPlusSquare} />{" "}
                            <span>Add House</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-dark">
                            <FontAwesomeIcon icon={faCog} />{" "}
                            <span>Manage Service</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
