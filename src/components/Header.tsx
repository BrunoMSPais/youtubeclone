import config from '../../config.json';
import { StyledHeader } from "../styles/Header";
import { Banner } from "./Banner";

export function Header() {
	return (
		<StyledHeader>

			<Banner />
			{/* <img src="banner" alt='banner' /> */}
			<section className='user-info'>
				<img
					src={`https://github.com/${config.github}.png`}
					alt='foto de perfil'
				/>
				<div className='user-info-text'>
					<h2>{config.name}</h2>
					<p>
						{config.job}
					</p>
				</div>
			</section>
		</StyledHeader>
	)
}