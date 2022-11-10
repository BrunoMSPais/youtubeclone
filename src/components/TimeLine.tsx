import { StyledTimeline } from "../styles/Timeline"

interface playlist {
	jogos: {
		title: string
		url: string
		thumb: string
	}[]
	'front-end': {
		title: string
		url: string
		thumb: string
	}[]
}

interface TimelineProps {
	playlist: playlist,
}

export function Timeline(props: TimelineProps) {
	const playlistsNames = Object.keys(props.playlist)

	return (
		<StyledTimeline>
			{playlistsNames.map((playlistName: string) => {
				const videos = props.playlist[playlistName]
				console.log(playlistName)
				console.log(videos)
				return (
					<section key={playlistName}>
						<h2>{playlistName}</h2>
						<div>
							{videos.map((video: any) => {
								return (
									<a href={video.url} key={video.title} target='_blank' rel="noreferrer">
										<img src={video.thumb} alt={video.title} />
										<span>{video.title}</span>
									</a>
								)
							})}
						</div>
					</section>
				)
			})}
		</StyledTimeline>
	)
}