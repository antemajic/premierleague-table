import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from '../../data.json'
import {mapResults} from '../../helperFunctions/helper'

let matchweek;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },

    paper: {
      marginTop: theme.spacing(1),
      marginLeft: '25%',
      maxWidth:'50%',
      width: 'auto',
      overflowX: 'auto',
      marginBottom: theme.spacing(5),
    },

    table: {
      minWidth: 650,
    },

    tableHead: {
        backgroundColor: 'lightblue',
        height: 'auto',
        width: '50%'
    },
  }),
);

function createData( club: string, divider: string, club2: string, result: string) {
  return { club, divider, club2, result };
}
interface MatchweekSelectProps {
  matchweek: number
}


export default function DenseTable(props: MatchweekSelectProps) {
  console.log('matchweek props', props.matchweek)

  const rows= props.matchweek !== undefined ? mapResults(data, props.matchweek) : mapResults(data, 38);
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.club} >
              <TableCell align="left">{row.club}</TableCell>
              <TableCell align="left">{row.club1score}</TableCell>
              <TableCell align="left">{':'}</TableCell>
              <TableCell align="left">{row.club2score}</TableCell>
              <TableCell align="left">{row.club2}</TableCell>
              
            </TableRow> 
            
              
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}