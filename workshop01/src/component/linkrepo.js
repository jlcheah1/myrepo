import React, {Component} from 'react';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

class LinkRepo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Typography variant="body" color="textSecondary" align="center">
                <Typography variant="text" color="textSecondary" align="center">
                    <b>Repository</b>&nbsp;
                </Typography>
                <Link color="inherit" href="https://github.com/jlcheah1/myrepo">
                    <b>https://github.com/jlcheah1/myrepo</b>
                </Link>
            </Typography>
        );
    }
}

export default LinkRepo;