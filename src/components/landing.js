import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

class Landing extends Component {
	// constructor(props) {
	// 	super(props);
		
	// }

	componentDidMount() {
		// const ENDPOINT = 'https://gateway.marvel.com:';
		// const CHARACTER = '443/v1/public/characters?';
		// const NAME = 'name=daredevil&';
		// const TS = Date.now();
		// const URL = `${ENDPOINT}${CHARACTER}${NAME}ts=${TS}${API_KEY}${HASH}`;
		// console.log(URL);
		// axios.get(URL)
		// 	.then(function (response) {
		// 		console.log(response);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
	}
	render() {
		return(
			<div>
				<Button primary>Click Me, Bro!</Button>
			</div>
		);
	}
}

export default Landing;
