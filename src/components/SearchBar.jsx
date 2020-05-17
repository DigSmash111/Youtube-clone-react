import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
	state = {
		searchTerm: ''
	}

	handleChange = event => {
		// here, 'this' refers to the class, not the method, because of the arrow function, we don't have to bind this method.
		this.setState({ searchTerm: event.target.value });
	}

	handleSubmit = event => {
		const { searchTerm } = this.state;
		const { onFormSubmit } = this.props;

		onFormSubmit(searchTerm);

		event.preventDefault();		// this will prevent the full page to refresh after form submit.
	}

	render() {
		return (
			<div>
				<Paper elevation={6} style={{ padding: 25 }}>
					<form onSubmit={this.handleSubmit}>
						<TextField fullWidth label="Search..." value={this.state.searchTerm} onChange={this.handleChange} />
					</form>
				</Paper>
			</div>
		);
	}
}

export default SearchBar;