import styled from "styled-components"

export const TuberSection = styled.section`
	padding: 2rem;

	h2 {
		font-size: 1rem;
		margin-bottom: 1rem;
		text-transform: capitalize;
	}
`

export const TubersContainer = styled.div`
	display: grid;
	gap: .5rem;
	width: calc(100vw - 16px * 4);
	grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
	grid-auto-flow: column;
	grid-auto-columns: minmax(200px,1fr);
	overflow-x: auto;
	scroll-snap-type: x mandatory;

	a {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			width: 100px;
			aspect-ratio: 1/1;
			border-radius: 50%;
			margin-bottom: .5rem;
		}

		span {
			font-size: 12px;
			margin: 0 auto;
			width: -moz-min-content;
  		width: min-content;
		}
	}
`