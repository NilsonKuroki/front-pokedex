import styled from "@emotion/styled";

export const ContainerPokemonList = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Pokemons = styled.div`
  width: 70%;
  max-height: 90%;
  min-width: 600px;
  margin: 20px 0 20px 0;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
`

export const BoxPokemon = styled.div`
  width: 200px;
  border: 1px solid red;
  margin: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImgPokemon = styled.img`
  height: 95%;
`