import * as React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Index() {
    return <Grid container spacing={0} style={{height: "100%", background: theme.palette.primary.mainGradient}}>
            <Grid item sm={6} style={{height: "100%"}}>
                <Box className="content-box" style={{height: "100%"}}>
                    <Typography color="common.white" variant="h1">DAVIDSON DECODED</Typography>
                    <Typography color="common.white" variant="subtitle1">Data analysis and musings for fans of Davidson athletics</Typography>
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box className="content-box" >
                    <TwitterTimelineEmbed sourceType="profile" screenName="DavidsonDecoded" options={{width: "80%", height: "500px"}} />
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box className="content-box" style={{background: theme.palette.secondary.main}}>
                    <Typography color="common.white" variant="h2">ABOUT</Typography>
                    <Typography color="common.white" variant="p">
                    Davidson Decoded started during the 2020-21 NCAA Men's Basketball season to provide Davidson and A10 Men's Basketball fans with easy-to-understand data analysis. While the Twitter account remains Davidson Decoded's most active presence, there are limits to sharing data analytics on Twitter. This website will (hopefully) cover what the Twitter feed cannot.

Davidson Decoded does not have any affiliation with Davidson College, and all opinions posted here are my own unless otherwise indicated.<br/><br/>Davidson Decoded started as a Twitter account, and continues to maintain an active presence there. The Davidson Decoded Twitter focuses on data analysis of Davidson and A10 Basketball, with the occasional tweet about general NCAA basketball or other sports. Recent tweets can be seen in the embed to the right.
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box className="content-box" style={{background: theme.palette.secondary.main}}>
                </Box>
            </Grid>
        </Grid>
}