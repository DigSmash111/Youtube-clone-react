import React from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';

class App extends React.Component {
	state = {
		selectedVideo: null,
		videos: []
	}

	componentDidMount() {
		this.handleSubmit("pdf generation with react and node");
	}

	handleSubmit = async (searchTerm) => {
		const { data } = await youtube.get('search',  {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyCZMJYmW0ZGi_bnda-eyQYp6G1GOXuSl8E',
				q: searchTerm
			}
		});

		console.log(data.items);

		this.setState({ 
			selectedVideo: data.items[0],
			videos: data.items.slice(1, 5)
		});
	}

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	}

	render() {
		const { selectedVideo, videos } = this.state;
		return (
			<div>
				<Grid container spacing={10} justify="center">
					<Grid item xs={12}>
						<Grid container spacing={10}>
							<Grid item xs={12}>
								<SearchBar onFormSubmit={this.handleSubmit} />
							</Grid>
							<Grid item xs={8}>
								<VideoDetail video={selectedVideo} />
							</Grid>
							<Grid item xs={4}>
								<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default App;
