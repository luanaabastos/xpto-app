
import { AppBar, createTheme, Grid, TextField, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Component } from "react";
import { SocialComponent } from "../social/social.component";

import logo_xpto_branco from './../../img/logo_xpto_branco.png';
import './footer.styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    // secondary: {
    //   main: green[50],
    // },
  },
});


export class FooterComponent extends Component {

  render = () => {

    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>

            <Grid container spacing={5}>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 2 }} align="center">
                  <img className="bottom-logo" src={logo_xpto_branco} alt="Logo branco" />
                </Typography>
                <Typography variant="body2" sx={{ my: 2 }} align="center">
                  <SocialComponent />
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>

                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ my: 2 }} align="center">
                      Empresa
                    </Typography>
                    <Typography variant="caption">
                      <ul>
                        <li>Carreira</li>
                        <li>Notícias</li>
                        <li>Sustentabilidade</li>
                      </ul>
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ my: 2 }} align="center">
                      Produtos
                    </Typography>
                    <Typography variant="caption">
                      <ul>
                        <li>Plataforma de Análise</li>
                        <li>Plataforma Integradora</li>
                      </ul>
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ my: 2 }} align="center">
                      Serviços
                    </Typography>
                    <Typography variant="caption">
                      <ul>
                        <li>Matriz de rastreabilidade</li>
                        <li>Dedução e Aplicação</li>
                        <li>Acessoria extendida</li>
                      </ul>
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    )

  }

}


