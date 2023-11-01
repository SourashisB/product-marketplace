import { Snackbar } from "@mui/joy";
import { Box } from "@mui/joy/Box";
import React from "react";

export const popupNot = (text) => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleOpen = (newState) => () => {
        setState({ ...newState, open: true });
    };
    
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    <Box sx={{ width: 500 }}>

        <Snackbar color="primary" anchorOrigin={{ bottom, right }} onClose={handleClose}>
            {text}
        </Snackbar>
    </Box>


}