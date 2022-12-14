import React, {Component} from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import loadimage from '../images/sun.png';
import Grid from '@mui/material/Grid';

class DynamicText extends Component {
    constructor() {
        super();
        this.state = {value: [
            "Logic will get you from A to B. Imagination will take you everywhere.",
            "There are 10 kinds of people. Those who know binary and those who don't.",
            "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
            "It's not that I'm so smart, it's just that I stay with problems longer.",
            "It is pitch dark. You are likely to be eaten by a grue."
        ]};
    }


    /*getRandom() {
        var weights = [0.25, 0.25, 0.25, 0.25, 0.25]; // probabilities

        var num = Math.random(),
            s = 0,
            lastIndex = weights.length - 1;

        for (var i = 0; i < lastIndex; ++i) {
            s += weights[i];
            if (num < s) {
                return this.state.value[i];
            }
        }
        
        return this.state.value[lastIndex];
    };

    getRandomProbability() {
        var idx = Math.floor(Math.random() * this.state.value.length);
        return this.state.value[idx];
    }

    equalProbability() {
        return [...Array(this.state.value.length).keys()].sort(() => 0.5 - Math.random())[0];
    }*/

    getRandomWithEqualProbability() {
        const value = this.state.value;
        const weight = [0.25, 0.25, 0.25, 0.25, 0.25];
        const distribution = this.generateDistribution(weight, 25); //distribution array size which affect precision
        return this.getRandom(value, distribution);
    }

    generateDistribution = (weights, size) => {
        const distribution = [];
        const sum = weights.reduce((a, b) => a + b);
        const quant = size / sum;
            for (let i = 0; i < weights.length; ++i) {
                const limit = quant * weights[i];
            for (let j = 0; j < limit; ++j) {
                distribution.push(i);
            }
        }
        return distribution;
    };

    getIndex = (distribution) => {
        const index = Math.floor(distribution.length * Math.random());
        return distribution[index];  
    };

    getRandom = (array, distribution) => {
        const index = this.getIndex(distribution);
        return array[index];
    };

    render() {
        return (
            <Typography variant="body" color="textSecondary" align="center">
                <Grid container>
                    <Grid item xs={12} style={{paddingTop: '50px'}}>
                        <img src={loadimage} width="80px" alt="Sun" />
                    </Grid>
                    <Grid item xs={12}>
                        <h2>{this.getRandomWithEqualProbability()}</h2>
                    </Grid>
                </Grid>
            </Typography>
        );
    }
}

export default DynamicText;