import Head from 'next/head'
import config from '../../config.json'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Timeline } from '../components/TimeLine'
import { Tubers } from '../components/Tubers'





export default function Home() {
	const playlists = config.playlists
	const tubers = config['fav-tubers']

	return (
		<div>
			<Head>
				<title>Alura Tube by Bruno Pais</title>
				<meta name='description' content='Youtube clone with Next.js' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Menu />
			<Header />
			<Timeline playlist={playlists} />
			<Tubers tubersList={tubers}/>
		</div>
	)
}
