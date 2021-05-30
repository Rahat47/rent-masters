import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/actions/hotelsActions";
import Sidebar from "../Sidebar/Sidebar";
import Styles from "./AddHouse.module.css";

const ManageService = () => {
    const dispatch = useDispatch();
    const services = useSelector(state => state.rooms);

    function deleteEvent(id) {
        dispatch(remove(id));
    }

    return (
        <div className="row">
            <div className="col-md-2 ">
                <Sidebar />
            </div>

            <div
                style={{ backgroundColor: "#F4F7FC", borderRadius: "10px" }}
                className="col-md-10 services p-5"
            >
                <div className={Styles.formContainer}>
                    <table className="table text-center table-hover table-bordered h4">
                        <tbody>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Charge</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {services.map(service => (
                                <tr key={service.id}>
                                    <td>{service.title}</td>
                                    <td>{service.price}</td>
                                    <td style={{ cursor: "pointer" }}>
                                        <FontAwesomeIcon
                                            className="edit text-success"
                                            icon={faEdit}
                                        />
                                    </td>
                                    <td style={{ cursor: "pointer" }}>
                                        <FontAwesomeIcon
                                            onClick={() =>
                                                deleteEvent(`${service.id}`)
                                            }
                                            className="delete text-danger"
                                            icon={faTrashAlt}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;
