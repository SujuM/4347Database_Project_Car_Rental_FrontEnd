import React, {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";


interface LoginProps {
    onLogin(): void;
}

const Login: React.FC<LoginProps> = ({onLogin}) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('555');
    const [password, setPassword] = useState('jkjjj');

    function handleClick() {
        const query = new URLSearchParams({
            username: email,
            password: password
        });

        fetch(`http://localhost/car_rental/login.php?${query}`)
            .then(r => r.text())
            .then(txt => {
                if(txt.includes("Logged in as")){
                    onLogin();
                    navigate('/');
                }
                else {
                    alert("Failed to login")
                }
            });
    }

    return (
        <div>
            <TextField
                required
                type={'email'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                label={'Email'} >
            </TextField>
            <TextField
                required
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="Password"
            />
            <Grid item xs={12}>
                <Button variant="outlined" onClick={handleClick}>
                    LOGIN
                </Button>
            </Grid>
        </div>
    );

};

export default Login