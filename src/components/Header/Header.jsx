import React from "react";
import { useState } from "react";
import { useNewsContext } from "../../context/Context";
import { Search } from "@mui/icons-material";
import { Box, TextField, Button, Chip, Snackbar, Alert } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import "./Header.css"

function Header () {

    const [searchInput, setSearchInput] = useState("");
    const {fetchNews} = useNewsContext();
    const [serachError, setSearchError] = useState("");
    const navigate = useNavigate();

    const username = localStorage.getItem("username");

    // Error handling of searching nothing
    const handleSearch = () => {
        if (searchInput.trim() === "") {
            setSearchError("Please enter a search keyword");
            return;
        }
        setSearchError("");
        fetchNews(searchInput, 1);
    }

    // Remove from local storage
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        navigate("/");
    }

    return (
        <Box className="header-bar">
            <h1 
                className="logo-text"
                onClick={() => window.location.href = "/home"} //click it will redirect to home
            >
                find.My.News :)
            </h1>

            <div className="search-container">
                <TextField
                    className="search-field"
                    size="small"
                    placeholder="What do you want to search? (Ex:F1)"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            handleSearch(); //enable enter key to search
                        }
                    }}
                />

                <Button
                    variant="contained"
                    className="search-button"
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </div>

            <div className="user-container">
                <Chip
                    icon={<PersonIcon sx={{ color: "white" }}/>}
                    label={username}
                    className="user-chip"
                />

                <Button
                    variant="contained"
                    className="search-button"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
            <Snackbar
                open={!!serachError}
                autoHideDuration={3000}
                onClose={() => setSearchError("")}
                anchorOrigin={{vertical:"bottom", horizontal:"center"}}
            >
                <Alert severity="warning" onClose={() => setSearchError("")}>
                    {serachError}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Header;