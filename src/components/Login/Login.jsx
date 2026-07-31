import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { TextField, Button, Typography, Snackbar, Alert, Box} from "@mui/material"
import bgImage from "../../images/henrique-ferreira.jpg";
import { LinearProgress } from "@mui/material"; 
import "./Login.css"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    //If already login
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    )

    const [isLoginInProgress, setIsLoginInProgress] = useState(false);
    const navigate = useNavigate();

    //If already logged in, skip straight to home
    if (isLoggedIn) {
        return <Navigate to="/home" />;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoginInProgress(true);

        //simulate a small delay like a real login call would have
        setTimeout(() => {
            if (username === "" || password === "") {
            setErrorMessage("All fields are mandatory")
        }
        else if (username === "mira123" && password === "12345") {
            setErrorMessage("");
            //successful login, put data in local storage
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);
            setIsLoggedIn(true);
            navigate("/home");
        } else {
            setErrorMessage ("Invalid username or password")
        }
        setIsLoginInProgress(false);
        }, 500)   
    }

    return (
        <Box
            className="login-page"
            sx={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
                <Box 
                    component="form"
                    onSubmit={handleLogin}
                    className="login-card"
                >
                    {isLoginInProgress && <LinearProgress sx={{ mb: 2 }} />} {/*Add linear progress to show when login */}
                    <Typography variant="h4" align="center" gutterBottom className="login-title">
                        find.My.News :)
                    </Typography>

                    <TextField 
                        label="User Name"
                        fullWidth
                        required
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />

                    <TextField 
                        label="Password"
                        fullWidth
                        required
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        className="login-button"
                        disabled={isLoginInProgress}
                    >
                        Login
                    </Button>
                </Box>

            <Snackbar
                open={!!errorMessage}
                autoHideDuration={4000} //disappear after 4s
                onClose={() => setErrorMessage("")} //clear error msg when close
                anchorOrigin = {{vertical:"bottom", horizontal:"center"}} //positon
            >
                <Alert severity="error" onClose={() => setErrorMessage("")}>{errorMessage}</Alert>
            </Snackbar>
        </Box>
    )
}

export default Login;

//snackbar - floating popup