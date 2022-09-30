import CheckIcon from '@mui/icons-material/Check';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Component } from "react";
import './home.styles.css';

import { Link } from 'react-router-dom';
import empresas_ribbon from './../../img/empresas_ribbon.png';

export class HomeRoute extends Component {

    render = () => {
        return (

            <Grid container spacing={2} className="homeContainer full-height">

                <Grid item xs={12} md={6} className="homeVideoContainer full-height">

                    <Typography variant="h2" fontWeight={1000} align='left' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                        A Consultoria que Você Mais Precisa.
                    </Typography>

                    <Typography variant="h6" align='justify' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="Análise de processos" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dedução e solução ágil" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="Aplicabilidade geral" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="Atuação em Todo o Vale do Paraíba." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="20 Anos de atendimento Full Time" />
                            </ListItem>
                        </List>
                    </Typography>

                    <Typography variant="h6" align='justify' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                        Para quaiquer dúvidas a repeito do contranto, acesse nossa
                        página de <Link to={'/orcamentos'}>orçamentos</Link> para sanar todas eventuais questões.
                    </Typography>

                </Grid>

                <Grid item xs={12} md={6} className="homeDescriptionContainer full-height">

                    <Typography variant="h4" fontWeight={600} align='center' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                        Apresentação da empresa
                    </Typography>

                    <Typography variant="h6" align='center' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                        Fique por dentro de tudo em nossas redes sociais
                    </Typography>

                    <div className='youtube-video-container'>
                        <iframe width="560" height="315" className='youtube-video'
                            src="https://www.youtube.com/embed/Iqoz9t14dRo" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>

                    <Typography variant="body2" align='center' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                        <img src={empresas_ribbon} alt="clientes" style={{ height: '50px' }} />
                    </Typography>

                    <Typography variant="body2" align='center' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                        *Mais de 10 empresas na região estão com nossa acessoria ativa
                    </Typography>


                </Grid >

            </Grid >

        )
    }

}