import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: "400px",
    maxHeight: "300px",
  },
});

type playerData = {
    name: string,
    number: number;
    position: string;
    confirmed: string;
    seniority: string;
}

interface Props {
    playerData: playerData[];
    league: string;
}

const PlayerTable = (props: Props): JSX.Element => {
    const classes = useStyles();

    const { playerData, league } = props;

    return (
        <TableContainer component={Paper}>
        <h3>{league}</h3>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Number</TableCell>
                    <TableCell align="right">Position</TableCell>
                    <TableCell align="right">Confirmed</TableCell>
                    <TableCell align="right">Seniority</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {playerData.map((player) => (
                <TableRow key={player.name}>
                <TableCell component="th" scope="row">
                    {player.name}
                </TableCell>
                <TableCell align="right">{player.number}</TableCell>
                <TableCell align="right">{player.position}</TableCell>
                <TableCell align="right">{player.confirmed}</TableCell>
                <TableCell align="right">{player.seniority}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default PlayerTable;
