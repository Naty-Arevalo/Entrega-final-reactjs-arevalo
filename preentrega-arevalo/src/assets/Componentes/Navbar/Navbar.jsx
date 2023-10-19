import { AppBar, Button, Toolbar } from "@mui/material";
import { Typography } from '@mui/material';
import './Navbar.css';
import CardWidget from "../CardWidget/CardWidget";
import { NavLink } from "react-router-dom";

const Navbar = () =>{

    return(  <>
    <AppBar>
        <Toolbar className="Tollbar-navbar" sx= {{backgroundColor: "#775110", display: "flex", justifyContent: "space-around"}}>
            <Typography sx= {{color:"black"}}>
                Aluminé Conciencia Bio
            </Typography>
            <Button className="Button-navbar" component={NavLink} to="/home" sx={{color: "black"}}>
                Home
            </Button>
            <Button className="Button-navbar" component={NavLink} to="/" sx={{color: "black"}}>
                Productos
            </Button >
            <Button className="Button-navbar" component={NavLink} to="/categories" sx={{color: "black"}}>
                Categorias
            </Button>
            <NavLink to="/cart"><CardWidget /></NavLink>
        </Toolbar>
    </AppBar> 
    </>)

}

export default Navbar