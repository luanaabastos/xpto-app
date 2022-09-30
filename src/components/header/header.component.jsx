import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Stack } from "@mui/system";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { LoginDialog } from "../../routes/login/login.dialog";

import logo_xpto_color from './../../img/logo_xpto_color.png';
import './header.styles.css';

const theme = createTheme({
    palette: {
        primary: {
            main: green[50],
        },
        // secondary: {
        //     main: purple[900],
        // },
    },
});

export class HeaderComponent extends Component {

    homePath = '/home';
    menuItems = [
        { name: 'Home', to: this.homePath },
        { name: 'Serviços', to: '/servicos' },
        { name: 'Orçamentos', to: '/orcamentos' },
        // { name: 'Login', to: '/login' },
        // { name: 'Getting Started', to: this.homePath },
    ]

    constructor() {
        super();

        this.state = {
            openLoginModal: false
        }
    }

    handleLogin = () => {
        this.setState({
            openLoginModal: true,
        })
    }

    handleClose = () => {
        this.setState({
            openLoginModal: false,
        })
    }

    render = () => {
        const menuItems = this.menuItems;
        const homePath = this.homePath;

        const { openLoginModal } = this.state;

        return (

            <Fragment>

                {openLoginModal && <LoginDialog
                    open={openLoginModal}
                    handleClose={() => { this.handleClose() }}
                ></LoginDialog>}

                <ThemeProvider theme={theme}>

                    <AppBar position="static">
                        <Toolbar>

                            <Link to={homePath} style={{ flex: 1 }}>
                                <Typography variant="h6" sx={{ my: 2 }}>
                                    <img className="logo" alt="header logo" src={logo_xpto_color} />
                                </Typography>
                            </Link>

                            <Stack direction="row" spacing={2}>
                                {menuItems.map((menuItem, key) => {
                                    return (
                                        <Link key={key}
                                            component="buton"
                                            to={menuItem.to}
                                            className="underlineNone">
                                            <Typography variant="h6" sx={{ my: 2 }}>
                                                {menuItem.name}
                                            </Typography>
                                        </Link>
                                    )
                                })}
                                <Link
                                    component="buton"
                                    onClick={() => { this.handleLogin() }}
                                    className="underlineNone">
                                    <Typography variant="h6" sx={{ my: 2 }}>
                                        Login
                                    </Typography>
                                </Link>
                            </Stack>

                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Fragment>
        )


    }


}