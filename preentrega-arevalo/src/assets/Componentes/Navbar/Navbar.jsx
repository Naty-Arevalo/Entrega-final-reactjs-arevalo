import { AppBar, Button, Toolbar } from "@mui/material";
import { Typography } from '@mui/material';
import './Navbar.css';
import CardWidget from "../CardWidget/CardWidget";

const Navbar = () =>{

    return(  <>
    <AppBar>
    
        <Toolbar className="Tollbar-navbar" sx= {{backgroundColor: "#775110", display: "flex", justifyContent: "space-around"}}>
            <Typography sx= {{color:"black"}}>
                Aluminé Conciencia Bio
            </Typography>
            <Button className="Button-navbar" sx={{color: "black"}}>
                Home
            </Button>
            
            <Button className="Button-navbar" sx={{color: "black"}}>
                Productos
            </Button >
            <Button className="Button-navbar" sx={{color: "black"}}>
                Contacto
            </Button>
            <CardWidget />
        </Toolbar>
    </AppBar> 


    </>)

}

export default Navbar