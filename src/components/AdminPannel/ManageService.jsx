import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Styles from "./AddHouse.module.css";

const ManageService = () => {
    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        fetch("https://powerful-basin-68172.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [services]);

    function deleteEvent(id) {
        fetch(`https://powerful-basin-68172.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => console.log("deleted successfully", result));
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
                            {services.map((service) => (
                                <tr key={service._id}>
                                    <td>{service.serviceName}</td>
                                    <td>{service.serviceCharge}</td>
                                    <td style={{ cursor: "pointer" }}>
                                        <FontAwesomeIcon
                                            className="edit text-success"
                                            icon={faEdit}
                                        />
                                    </td>
                                    <td style={{ cursor: "pointer" }}>
                                        <FontAwesomeIcon
                                            onClick={() =>
                                                deleteEvent(`${service._id}`)
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
