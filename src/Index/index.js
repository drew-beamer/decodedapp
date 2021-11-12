import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const a10Ranks = [
    "St. Bonaventure","VCU","Richmond","Davidson","Dayton",
    "Saint Louis","Rhode Island","Massachusetts","George Mason",
    "Duquesne","La Salle","Saint Joseph's","George Washington","Fordham"
]

const rows = a10Ranks.map((team, index) => {
    return <TableRow key={index}>
        <TableCell align="left">{index+1}</TableCell>
        <TableCell align="left">{team}</TableCell>
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