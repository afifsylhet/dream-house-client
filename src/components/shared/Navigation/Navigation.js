import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';


import { FaHome } from 'react-icons/fa';


const pages = ['Home', 'About', 'All Listing', 'Mortgage Calculator', 'Contact'];

const RoutesAndLinks = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'All Listing', link: '/allProduct' },
    { name: 'Mortgate Calculator', link: '/calculator' },
    { name: 'Contact', link: 'contact' }
]



const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    const theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#20b759',
                dark: '#002884',
                contrastText: '#fff',
            }
        },
    });

    return (
        <AppBar position="static" style={{ backgroundColor: '#20b759', fontFamily: 'roboto' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                    >
                        <FaHome style={{ marginRight: '5px' }} />   Dream House Real Estate
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {RoutesAndLinks.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <NavLink to={page.link} style={{ textDecoration: 'none' }}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}
                    >
                        <FaHome />  Dream House
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        {RoutesAndLinks.map((page) => (
                            <NavLink
                                to={page.link}
                                key={page}
                                onClick={handleCloseNavMenu}
                                style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>




                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navigation;