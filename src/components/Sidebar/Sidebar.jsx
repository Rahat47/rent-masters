import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
    faCalendar,
    faCog,
    faGripHorizontal,
    faHome,
    faPlusSquare,
    faSignOutAlt,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div
            className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
            style={{ height: "100vh" }}
        >
            <ul className="list-unstyled texy-decoration-none">
                <li>
                    <Link to="/home" className="text-dark">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookings" className="text-dark">
                        <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                        <span>Booking List</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/allAppointments" className="text-dark">
                            <FontAwesomeIcon icon={faPlusSquare} />{" "}
                            <span>Add Rent House</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-dark">
                            <FontAwesomeIcon icon={faUsers} />{" "}
                            <span>My Rent</span>
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
