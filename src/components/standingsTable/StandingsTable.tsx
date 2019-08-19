import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {mapTableStandings} from '../../helperFunctions/helper'
import data from '../../data.json'
import './styles.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      marginLeft: '12.5%',
      width: '75%',
      overflowX: 'auto',
      marginBottom: theme.spacing(2),
      maxHeight: 650
    },
    table: {
      minWidth: 650,
    },
    tableHead: {
        backgroundColor: 'lightblue',
        height: 'auto',
        width: '100%'
    },
  }),
);

function createData(position: string, club: string, fat: number, carbs: number, protein: number) {
  return { position, club, fat, carbs, protein };
}

const rows = [
  createData('1', 'Chelsea', 6.0, 777, 4.0),
  createData('2', 'Manchester United', 6.0, 777, 4.0),
  createData('3', 'Liverpool', 6.0, 777, 4.0),
  createData('4', 'Manchester City', 6.0, 777, 4.0),
  createData('5', 'Tottenham  ', 6.0, 777, 4.0),
  createData('6', 'Arsenal', 6.0, 777, 4.0)
];

let defineColorByPosition = (position: number) => {
  if (position <= 4) {
    return '#b3ffcc'
  }
  else if (position > 17){
    return '#ff9999'
  }
  else return '#ffffff'
}

interface StandingsTableProps {
  matchweek: number
}
let defineForm = (form: string) => {
  if (form === 'W') {
    return 'green'
  }
  else if (form === 'L'){
    return 'red'
  }
  
}

interface StandingsTableProps {
  matchweek: number
}

export default function DenseTable(props: StandingsTableProps) {
  let dataForRender = mapTableStandings(data,  props.matchweek);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead >
            <TableRow className={classes.tableHead}>
            
              <TableCell align="left" style={{width: "auto"}}>Position</TableCell>
              <TableCell align="left">Club</TableCell>
              <TableCell align="left">Played</TableCell>
              <TableCell align="left">Won</TableCell>
              <TableCell align="left">Drawn</TableCell>
              <TableCell align="left">Lost</TableCell>
              <TableCell align="left">Goals Scored</TableCell>
              <TableCell align="left">Goals Conceded</TableCell>
              <TableCell align="left">Goals Difference</TableCell>
              <TableCell align="left">Points</TableCell>
              <TableCell align="left">Form</TableCell>
            </TableRow>
          </TableHead>
{/*           <TableBody>
            {rows.map(row => (
              row.position <= '4' ? <TableRow key={row.position} style = {{backgroundColor : 'lightgreen'}}>
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell align="left">{row.club}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow> : <TableRow key={row.position}>
            <TableCell component="th" scope="row">
              {row.position}
            </TableCell>
            <TableCell align="left">{row.club}</TableCell>
            <TableCell align="left">{row.fat}</TableCell>
            <TableCell align="left">{row.carbs}</TableCell>
            <TableCell align="left">{row.protein}</TableCell>
          </TableRow>
              
            ))}
          </TableBody> */}
          <TableBody>
            {dataForRender.map((row, index) => (
              <TableRow key={index + 1} style = {{backgroundColor: defineColorByPosition(index +1)}}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{props.matchweek}</TableCell>
              <TableCell align="left">{row.won}</TableCell>
              <TableCell align="left">{row.drawn}</TableCell>
              <TableCell align="left">{row.lost}</TableCell>
              <TableCell align="left">{row.goalsScored}</TableCell>
              <TableCell align="left">{row.goalsConceded}</TableCell>
              <TableCell align="left">{row.goalsDifference}</TableCell>
              <TableCell align="left">{row.points}</TableCell>
              <TableCell align="left" style={{width: '80px'}}>{ row.form.slice(Math.max(row.form.length - 5, 0)).map(element => <div className="formIndicator" style={{backgroundColor: defineForm(element)}}></div>)}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}