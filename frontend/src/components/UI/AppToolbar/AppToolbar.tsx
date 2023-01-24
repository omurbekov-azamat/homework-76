import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';

export const container = {
    width: '800px',
    margin: '0 auto',
    padding: '10px',
}

const AppToolbar = () => {
    return (
        <AppBar position="sticky" >
            <Toolbar style={container}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Chat
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;