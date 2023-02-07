import React, { useState, useEffect } from 'react'
import {
  ContainerPokemonList, Pokemons, BoxPokemon, ImgPokemon
} from "./styles"
import PokemonDetails from '../../components/PokemonDetails';
import axios from 'axios';

const PokemonList = ()=>{
  const [listPokemon, setListPokemon] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState(undefined)

  useEffect(() => {
    getPokemons()
  },[])
  const getPokemons = ()=>{
    const endPoints = []
    for(var i = 1; i<=60; i++){
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endPoints.map(endpoint=>axios.get(endpoint))).then((res)=>{setListPokemon(res)})
  }
  return(
  <ContainerPokemonList>
    <Pokemons>
      {listPokemon.map((pokemon)=>{
        return(
        <BoxPokemon onClick={()=>{setPokemonDetails(pokemon.data)}} key={pokemon.data.name}>
          <ImgPokemon src={pokemon.data.sprites.front_default||""} alt={pokemon.data.name||""}/>
          <p>{pokemon.data.name}</p>
        </BoxPokemon>)
      })}
    </Pokemons>
    <PokemonDetails pokemon={pokemonDetails}/>
  </ContainerPokemonList>)
}

export default PokemonList