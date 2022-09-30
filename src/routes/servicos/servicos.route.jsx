import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Component } from "react";
import './servicos.styles.css'

export class ServicosRoute extends Component {

    render = () => {

        const lorem = `Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean
            scelerisque metus eget sem. Suspendisse
            fermentum. Proin diam augue, semper
            vitae, varius et, viverra id, felis. Nam a
            nunc. Mauris et dolor. Aliquam metus.
            Integer risus velit, facilisis eget, viverra
            et, venenatis id, leo. Nullam libero nunc,
            tristique eget, laoreet eu, sagittis id, ante.
            Donec sit amet enim. Mauris et pede.
            Vestibulum non arcu a ante feugiat
            vestibulum.\n\n
            Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean
            scelerisque metus eget sem. Suspendisse
            fermentum. Proin diam augue, semper
            vitae, varius et, viverra id, felis. Nam a
            nunc. Mauris et dolor. Aliquam metus.
            Integer risus velit, facilisis eget, viverra
            et, venenatis id, leo. Nullam libero nunc,
            tristique eget, laoreet eu, sagittis id, ante.
            Donec sit amet enim. Mauris et pede.
            Vestibulum non arcu a ante feugiat
            vestibulum.`;

        const servicos = [
            { id: 1, content: lorem, title: 'Matriz de rastreabilidade' },
            { id: 2, content: lorem, title: 'Dedução e Aplicação' },
            { id: 3, content: lorem, title: 'Implementação da Nossa Plataforma' },
            { id: 4, content: lorem, title: 'Acessoria extendida' },
        ]

        return (<div className="servicosContainer">

            <Typography variant="h4" fontWeight={600} align='center' sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 2 } }}>
                Serviços da XPTO
            </Typography>

            <Typography variant="h6" fontWeight={400} align='center' gutterBottom={true} >
                O que exatamente fazemos?
            </Typography>

            <div className="servicosTilesContainer">
                {servicos.map((servico) => {
                    return (
                        <Card key={servico.id}>
                            <CardContent>
                                <Typography variant="h5" sx={{ minHeight: '5rem' }}>
                                    {servico.title}
                                </Typography>
                                <Divider sx={{ borderWidth: '2px', backgroundImage: `linear-gradient(to left, ${purple[900]}, ${purple[100]}, ${purple[900]})` }} />
                                <Typography variant="body2">
                                    {servico.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>


        </div>)
    }

}