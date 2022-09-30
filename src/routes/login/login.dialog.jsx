import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, TextField } from "@mui/material";
import { Component } from "react";

export class LoginDialog extends Component {

    render = () => {

        const { open, handleClose } = this.props;

        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Login
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} my={2} >
                        <TextField fullWidth id="outlined-basic" label="Username ou Email" variant="outlined" />
                        <TextField fullWidth id="outlined-basic" label="Senha" variant="outlined" type="password" />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClose} autoFocus>
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

}