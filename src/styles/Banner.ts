import styled from "styled-components";

// TODO: Fazer um banner para o Header consistindo numa imagem com w:100% e h:230px
export const BannerContainer = styled.div`
  width: 100%;
  height: 230px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
    overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }

  p {
    position: absolute;
    bottom: .5rem;
    right: .5rem;
    font-size: .75rem;
    opacity: .75;
    margin: 0;
  }

  a {
    text-decoration: underline;
  }
`
