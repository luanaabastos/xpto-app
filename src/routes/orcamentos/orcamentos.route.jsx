import { Box, Button, Card, CardActions, CardContent, Divider, FormControl, Grid, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Component } from "react";
import CheckIcon from '@mui/icons-material/Check';
import { purple } from "@mui/material/colors";

export class OrcamentosRoute extends Component {

    constructor() {
        super();

        this.state = {
            currentCurrency: 'brl'
        }
    }

    handleChange = (arg) => {
        this.setState({
            currentCurrency: arg.target.value
        })
    }

    render = () => {

        const { currentCurrency } = this.state;

        const moedas = [
            { currency: 'brl', prefix: 'R$', name: "Real", rate: 1 },
            { currency: 'usd', prefix: '$', name: "Dolar", rate: 0.19 },
            { currency: 'eur', prefix: '€', name: "Euro", rate: 0.15 },
        ]

        const moeda = moedas.filter((m) => {
            return m.currency == currentCurrency;
        })[0];

        const lorem = `Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean scelerisque metus eget sem.
            Suspendisse fermentum. Proin diam augue.`;

        const servicos = [
            { id: 1, currency: 'brl', valor: 39990, suffix: 'Mensais', contents: [lorem], title: 'Intro Plan' },
            { id: 2, currency: 'brl', valor: 109990, suffix: 'Mensais', contents: [lorem, lorem, lorem], title: 'Standard Plan' },
            { id: 3, currency: 'brl', valor: 1429999, suffix: 'AA', contents: [lorem, lorem, lorem, lorem, lorem], title: 'Master Plan' },
            { id: 4, currency: 'brl', valor: 1679999, suffix: 'AA', contents: [lorem, lorem, lorem, lorem, lorem, lorem], title: 'Partner Plan' },
        ]

        const valorCalculado = (servico) => (((servico.valor * moeda.rate) / 100).toFixed(2))

        return (
            <div className="servicosContainer">

                <Typography variant="h4" fontWeight={600} align='center' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                    Nossos Pricipais Orçamentos
                </Typography>

                <Grid
                    container
                    spacing={0}
                    justifyContent="right">

                    <Grid item xs={12} md={2} mb={1}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={currentCurrency}
                                label="Age"
                                onChange={this.handleChange}
                            >
                                {moedas.map((m) => {
                                    return (
                                        <MenuItem value={m.currency}>{m.name}</MenuItem>
                                    )
                                })}


                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>


                <div className="servicosTilesContainer">
                    {servicos.map((servico) => {
                        return (
                            <Card key={servico.id} sx={{ minWidth: 275 }}>

                                <CardContent>
                                    <Typography variant="h5" sx={{ minHeight: '2.5rem' }}>
                                        {servico.title}
                                    </Typography>
                                    <Typography variant="body2" align="right" sx={{ minHeight: '2.5rem' }}>
                                        {moeda.prefix} {valorCalculado(servico)}/{servico.suffix}
                                    </Typography>
                                    <Divider sx={{ borderWidth: '2px', backgroundImage: `linear-gradient(to left, ${purple[900]}, ${purple[100]}, ${purple[900]})` }} />

                                    <List dense={true}>
                                        {servico.contents.map((content, index) => {
                                            return (<ListItem key={index} >
                                                <ListItemIcon><CheckIcon /></ListItemIcon>
                                                <ListItemText primary={content} />
                                            </ListItem>)
                                        })}
                                    </List>
                                </CardContent>

                            </Card>
                        )
                    })}
                </div>

                <Box my={2}>
                    <Card>
                        <CardContent>
                            <Grid
                                container
                                spacing={2}
                                alignItems="center"
                                justifyContent="center">

                                <Grid item xs={12} md={10}>
                                    <TextField fullWidth label="Alguma Dúvida ?" variant="filled" />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Button variant="contained">Enviar</Button>
                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Box>


            </div>
        )
    }

}