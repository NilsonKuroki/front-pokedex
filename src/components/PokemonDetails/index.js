import React from 'react'
import {
  ContainerPokemon, ContentPokemon, Abilities, ContentAbilities
} from './styles'
import Team from '../Team'

const PokemonDetails = ({pokemon})=>{
  return(
    <ContainerPokemon>
      {pokemon!==undefined?
      <>
        <h2>{pokemon.name||""}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <ContentPokemon>
          <p>Habilidades</p>
          <ContentAbilities>
          {
            pokemon.abilities.map((ability)=>{
              return <Abilities key={ability.ability.name}>{ability.ability.name}</Abilities>
            })
          }
          </ContentAbilities>
        </ContentPokemon>
      </>
      :
      <>
        <p>Selecione um pokemon para ver seus detalhes</p>
      </>}
      <Team/>
    </ContainerPokemon>
  )
}
export default PokemonDetails