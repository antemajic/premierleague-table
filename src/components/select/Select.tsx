import React from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);
const matchweek = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38'
];

interface SelectProps {
  matchweekSelect: Function
}

export default function CustomizedSelects(props: SelectProps) {
  const classes = useStyles();
  const [matchweekValue, setMatchweekValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMatchweekValue(event.target.value as string)
    props.matchweekSelect(event.target.value)
  };
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.margin}>
        <Select
          value={matchweekValue}
          onChange={handleChange}
          input={<BootstrapInput name="age" id="age-customized-select" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {matchweek.map(element => {
            return <MenuItem value={element} key={element}>{element}</MenuItem>
          })}
        </Select>
      </FormControl>

    </form>
  );
}