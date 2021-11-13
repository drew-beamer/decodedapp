import * as React from 'react';
import { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import a10Ranks from "../Data/a10ranks";
import theme from "../theme.js"





export default function Rankings() {
    const [teamData, setTeamData] = React.useState([])

    useEffect(() => {
        // Parsed Format
        fetch("https://sheet.best/api/sheets/7bfc493a-ce03-48aa-91bf-b9ca28369d25")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTeamData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const rows = teamData.map((data, index) => {
        return <TableRow key={index}>
            <TableCell align="left"><Typography variant="p">{data['Rank']}</Typography></TableCell>
            <TableCell align="left"><Typography variant="p">{data['A10 Teams']}</Typography></TableCell>
            <TableCell align="left"><Typography variant="p">{data['Elo']}</Typography></TableCell>
            <TableCell align="left"><Typography variant="p">{data['AdjEm']}</Typography></TableCell>
            <TableCell align="left"><Typography variant="p">{data['Score']}</Typography></TableCell>
        </TableRow>
      });


    return (<Grid container spacing={0} style={{height: "100vh", background: theme.palette.primary.mainGradient}}>
            <Grid item sm={6}  className="content-box" >
                <Box>
                    <Typography variant="h2" color="common.white">A10 POWER RANKINGS</Typography>
                    <Typography variant="p" color="common.white">Starting in summer 2021, I've published power rankings with occassional updates. These rankings are based on a few factors, however the two weighted most heavily are a team's Elo, and the weighted average of a team's AdjEm from a few different sources (i.e., KenPom, Bart Torvik, and my own preason rankings).</Typography>
                </Box>
            </Grid>
            <Grid item sm={6} className="content-box" >
                <Box >
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{maxHeight: 500}} component={Paper}>
                            <Table stickyHeader sx={{maxWidth: 1000}} aria-label="ranking-table">
                                <TableHead style={{background: theme.palette.primary.main}}>
                                    <TableRow>
                                        <TableCell align="left"><Typography variant="p">(RANK)</Typography></TableCell>
                                        <TableCell align="left"><Typography variant="p">(TEAM)</Typography></TableCell>
                                        <TableCell align="left"><Typography variant="p">(ELO)</Typography></TableCell>
                                        <TableCell align="left"><Typography variant="p">(WAVG ADJEM)</Typography></TableCell>
                                        <TableCell align="left"><Typography variant="p">(SCORE)</Typography></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
        );
    
}