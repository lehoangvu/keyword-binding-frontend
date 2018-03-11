import React from 'react'
import ReactDOM from 'react-dom'

import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';
import { currency } from './../utils'
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';

const styles = theme => {
	console.log(theme);
	return {
	  root: {
	    width: '100%',
	    marginTop: theme.spacing.unit * 3,
	    overflowX: 'auto',
	  },
	  table: {
	    minWidth: 700,
	  },
	  hightColor: {
	  	color: '#4CAF50'
	  },
	  keywordCell: {
	  	fontSize: 18
	  },
	  firstCell: {
	  	width: 60,
	  	textAlign: 'center'
	  },
	  link: {
	  	color: '#0277BD', 
	  	fontSize: 18
	  },
	  formControl: {
	    margin: theme.spacing.unit,
	  },
	   inputLabelFocused: {
	    color: purple[500],
	  },
	  inputUnderline: {
	    '&:after': {
	      backgroundColor: purple[500],
	    },
	  },
}
};

const data = [
	{
		id: 1,
		keyword: 'iphone 8',
		start_price: 1100,
		step_price: 200,
		start_at: 'Sun Mar 11 2018 05:18:42 GMT-0400 (EDT)',
		status: 'waiting',
		'join': 5,
	},
	{
		id: 2,
		keyword: 'tỏi châu việt cường',
		start_price: 2500,
		step_price: 200,
		start_at: 'Sun Mar 11 2018 05:18:42 GMT-0400 (EDT)',
		status: 'finished',
		'join': 5,
	},
	{
		id: 3,
		keyword: 'iphone x',
		start_price: 1500,
		step_price: 200,
		start_at: 'Sun Mar 11 2018 05:18:42 GMT-0400 (EDT)',
		status: 'started',
		'join': 5,
	},
]

class Keyword extends React.Component {
	constructor(p) {
		super(p)
	}
	getStatusIcon(status) {
		let stt = '';
		switch(status) {
			case 'waiting':
			stt = <i className="material-icons" style={{verticalAlign: 'middle', fontSize: '16px',color: '#439e59'}}>play_circle_outline</i>
			break;
			case 'started':
			stt = <i className="material-icons" style={{verticalAlign: 'middle', fontSize: '16px',color: '#439e59'}}>pause_circle_outline</i>
			break;
			case 'finished':
			stt = <i className="material-icons" style={{verticalAlign: 'middle', fontSize: '16px',color: '#439e59'}}>check_circle</i>
			break;
			default:
		}
		return <span>{stt}</span>
	}
	render() {
		const { classes } = this.props
		return <Paper className={classes.root}>
				<FormControl className={classes.formControl}>
			        <InputLabel
			          FormControlClasses={{
			            focused: classes.inputLabelFocused,
			          }}
			          htmlFor="custom-color-input"
			        >
			          Search
			        </InputLabel>
			        <Input
			          classes={{
			            underline: classes.inputUnderline,
			          }}
			          id="custom-color-input"
			          endAdornment={<InputAdornment position="end">
			        		<i className="material-icons">search</i>
			        	</InputAdornment>}
			        />
		      </FormControl>
		      <Table className={classes.table}>
		        <TableHead>
		          <TableRow>
		            <TableCell padding="none" ></TableCell>
		            <TableCell padding="none" >Keyword</TableCell>
		            <TableCell numeric>Start</TableCell>
		            <TableCell numeric>Step</TableCell>
		            <TableCell numeric>Join</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		          {data.map(n => {
		            return (
		              <TableRow key={n.id}>
		                <TableCell padding="none" className={classNames(
		                	classes.firstCell
		                )}>{this.getStatusIcon(n.status)}</TableCell>
		                <TableCell padding="none" className={classNames(
		                	classes.keywordCell
		                )}><a className={classes.link} href="">{n.keyword}</a></TableCell>
		                <TableCell className={classNames(
		                	classes.keywordCell
		                )} numeric>{currency(n.start_price)}</TableCell>
		                <TableCell className={classNames(
		                	classes.keywordCell
		                )} numeric>{currency(n.step_price)}</TableCell>
		                <TableCell className={classNames(
		                	classes.keywordCell
		                )} numeric className={classNames(
		                	classes.hightColor,
		                	classes.keywordCell
		                )}>{n.join}</TableCell>
		              </TableRow>
		            );
		          })}
		        </TableBody>
		      </Table>
		    </Paper>
	}
}

export default withStyles(styles)(Keyword)