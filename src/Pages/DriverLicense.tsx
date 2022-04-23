import React from "react";
import {TextField} from "@mui/material";

const DriverLicense: React.FC = () => {
    return (
        <div>
            <TextField
                required
                type="text"
                defaultValue=""
                label="Issuing State"
            />
            <TextField
                required
                type="text"
                defaultValue=""
                label="Last Name"
            />
            <TextField
                required
                type="text"
                defaultValue=""
                label="Birth Date"
            />
            <TextField
                required
                type="text"
                defaultValue=""
                label="Driver's License Number"
            />
            <TextField
                required
                type="text"
                defaultValue=""
                label="Expiration Date"
            />
        </div>
    );
};

export default DriverLicense