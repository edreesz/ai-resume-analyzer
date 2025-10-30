import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const WipeApp = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Data Management</h1>
            <p>Authentication required to manage app data</p>
        </div>
    );
};

export default WipeApp;
