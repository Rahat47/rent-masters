import React from "react";
import AddHouse from "../components/AdminPannel/AddHouse";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <AddHouse />
            </div>
        </div>
    );
};

export default Dashboard;
