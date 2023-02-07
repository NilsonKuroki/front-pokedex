import styled from '@emotion/styled'

export const ContainerPokemon = styled.div`
  width: 300px;
  min-height: 90%;
  margin-left: 20px;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContentPokemon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid purple;
`
export const ImgPokemon = styled.img`
  width: 300px;
  height: 300px;
`
export const Abilities = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  padding: 0 5px 0 5px;
  margin: 5px;
`
export const ContentAbilities = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`