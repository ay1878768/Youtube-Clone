import React from "react";
import Filterbar from "./Filterbar";
import { Outlet } from "react-router-dom";

const Maincontainer = () => {
    
    return (
        <div className="flex flex-col mx-auto">
            <Filterbar />
            <Outlet />
        </div>
    );
};

export default Maincontainer;
