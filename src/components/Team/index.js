import React, {useEffect, useState} from 'react'
import {
  ContainerTeam
} from './styles'
import axios from 'axios';

const Team = ()=>{
  const [teams, setTeams] = useState([])
  const [name, setName] = useState([])
  useEffect(()=>{
    if(!teams){
      getTeams()
    }
  })
  const getTeams = async ()=>{
    const result = await axios.get("http://localhost:3333/team/")
    setTeams(result.data)
  }
  const handleAddTeam = async(name)=>{
    await axios.post("http://localhost:3333/team/", {
      name
    })
    await getTeams()
  }
  return(
    <ContainerTeam>
      <div>
      {
        teams.map((team,index)=>{
          return(
            <div key={index}>{team.name}</div>
          )
        })
      }</div>
      <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={()=>{handleAddTeam(name)}}>Adicionar time</button>
    </ContainerTeam>
  )
}
export default Team