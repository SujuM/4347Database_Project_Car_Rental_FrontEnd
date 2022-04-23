import React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";


interface NavigationProps {
    isLoggedIn: boolean;
}
const Navigation: React.FC<NavigationProps> = ({isLoggedIn}) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Car Rentals
                    </Typography>

                    {!isLoggedIn && (
                        <>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                        </>
                    )}

                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Navigation;