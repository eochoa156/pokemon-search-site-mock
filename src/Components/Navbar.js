import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

function Navbar () {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <MenuSharpIcon style={{fontSize: 50}}/>
                    <Typography
                    variant="h3"
                    >
                        LOGO
                    </Typography>
                    <Typography
                    style={{
                        padding: 10,
                        magin: "autp"
                    }}
                    >
                        Home
                    </Typography>

                    <Typography
                    style={{
                        padding: 10,
                        magin: "autp"
                    }}
                    >
                        Wishlist
                    </Typography>

                    <Typography
                    style={{
                        padding: 10,
                        magin: "autp"
                    }}
                    >
                        Other
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navbar;