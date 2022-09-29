import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

import logo from "../assets/images/kdaus.png";

const pages = ["Photos", "Documents", "Register"];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            maxWidth: "10rem",
                            padding: "1rem 0",
                        }}
                    >
                        <a href="https://kennedysdisease.org">
                            <img
                                src={logo}
                                alt="KDA Logo"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </a>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: "var(--fc-primary)" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/">
                                    <Typography
                                        textAlign="center"
                                        sx={{ color: "var(--fc-primary)" }}
                                    >
                                        Home
                                    </Typography>
                                </Link>
                            </MenuItem>
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link to={page.toLowerCase()}>
                                        <Typography
                                            textAlign="center"
                                            sx={{ color: "var(--fc-primary)" }}
                                        >
                                            {page}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/sample-questions">
                                    <Typography
                                        textAlign="center"
                                        sx={{ color: "var(--fc-primary)" }}
                                    >
                                        Sample Questions
                                    </Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                            maxWidth: "10rem",
                            padding: "1rem 0",
                            margin: "0 auto",
                        }}
                    >
                        <img
                            src={logo}
                            alt="KDA Logo"
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Link to="/">
                            <Button
                                onClick={handleCloseNavMenu}
                                className="nav-link"
                                sx={{
                                    my: 2,
                                    color: "var(--fc-primary)",
                                    display: "block",
                                }}
                            >
                                Home
                            </Button>
                        </Link>
                        {pages.map((page, index) => (
                            <Link key={page} to={page.toLowerCase()}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    className="nav-link"
                                    sx={{
                                        my: 2,
                                        color: "var(--fc-primary)",
                                        display: "block",
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                        <Link to="/sample-questions">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "var(--fc-primary)",
                                    display: "block",
                                }}
                            >
                                Sample Questions
                            </Button>
                        </Link>
                    </Box>
                    <Button
                        variant="contained"
                        href="https://www.kennedysdisease.org/get-involved/donate-now"
                        target="_BLANK"
                        rel="noreferrer"
                    >
                        Donate
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
