import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import a10Ranks from "../Data/a10ranks";

const teamData = a10Ranks();
console.log(teamData)
const rows = teamData.map((data, index) => {
    data = data.split("\t")
    return <TableRow key={index}>
        <TableCell align="left">{data[0]}</TableCell>
        <TableCell align="left">{data[1]}</TableCell>
        <TableCell align="left">{data[2]}</TableCell>
        <TableCell align="left">{data[3]}</TableCell>
        <TableCell align="left">{data[4]}</TableCell>
    </TableRow>
});



export default function Index() {
    return (<div>
        <div className="section">
            <Typography variant="h3">Davidson Decoded Power Rankings</Typography>
        </div>
        <div>
            <TableContainer className="section" component={Paper}>
                <Table sx={{maxWidth: 1000}} aria-label="ranking-table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">(Rank)</TableCell>
                            <TableCell align="left">Team</TableCell>
                            <TableCell align="left">Elo</TableCell>
                            <TableCell align="left">Average AdjEm</TableCell>
                            <TableCell align="left">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
    );
}