import { TubersContainer, TuberSection } from "../styles/Tubers"

interface TuberInterface {
	name: string,
	url: string,
	thumb: string
}

interface TubersProps {
	tubersList: TuberInterface[]
}

export function Tubers(props: TubersProps) {
	return (
		<TuberSection>
			<h2>Favoritos</h2>
			<TubersContainer>
				{props.tubersList.map((tuber: TuberInterface) => (
					<a href={tuber.url} key={tuber.name} target='_blank' rel="noreferrer">
						<img src={tuber.thumb} alt={tuber.name} />
						<div>
							<span>{tuber.name}</span>
						</div>
					</a>
				))}
			</TubersContainer>
		</TuberSection>
	)
}