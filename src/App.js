import './App.css';
import ReactHlsPlayer from 'react-hls-player'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Example with autoplay and no controls</h1>
				<ReactHlsPlayer
					url='/video/output.m3u8'
					autoplay={true}
					controls={false}
					width={500}
					height={300}
				/>

				<h1>Example of streaming working:</h1>
				<p>You can see progress bar in the control showing HLS loading part by part</p>
				<ReactHlsPlayer
					url='/video/output.m3u8'
					autoplay={false}
					controls={true}
					width={500}
					height={300}
				/>

				<h1>Example of another m3u8 video working:</h1>
				<p>This is a 15 minute video where you can see m3u8 loading part by part</p>
				<ReactHlsPlayer
					url='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
					autoplay={false}
					controls={true}
					width={500}
					height={280}
				/>
			</header>
		</div>
	);
}

export default App;
