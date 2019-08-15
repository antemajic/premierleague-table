import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from '../../data.json'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },

    paper: {
      marginTop: theme.spacing(1),
      marginLeft: '25%',
      maxWidth:'70%',
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

const rows = [
  createData( 'Chelsea', ':', 'Manchester United', '4:0'),
  
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.club} >
              <TableCell align="left">{row.club}</TableCell>
              <TableCell align="left">{row.divider}</TableCell>
              <TableCell align="left">{row.club2}</TableCell>
              <TableCell align="left">{row.result}</TableCell>
            </TableRow> 
            
              
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}