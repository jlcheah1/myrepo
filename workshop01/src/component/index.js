import React, {Component} from 'react';
import { Typography } from '@mui/material';
import DynamicText from './dynamictext';
import LinkRepo from './linkrepo';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

class Index extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DynamicText />
                </Grid>
                <Grid item xs={12}>
                    <LinkRepo />
                </Grid>
            </Grid>
        );
    }
}

export default Index;