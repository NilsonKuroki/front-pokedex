import React, {useEffect, useState} from 'react'
import { 
  TextField, Select, FormControl, MenuItem, InputLabel, Button
 } from '@mui/material';
import {
  ContainerTeam
} from './styles'
import axios from 'axios';

const Team = ()=>{
  const [teams, setTeams] = useState([])
  const [teamIdSelect, setTeamIdSelect] = useState("")
  const [name, setName] = useState("")
  useEffect(()=>{
    if(!teams[0]){
      getTeams()
    }
  })

  const getTeams = async ()=>{
    const result = await axios.get("http://localhost:3333/team/")
    setTeams(result.data)
  }
  const handleAddTeam = async(name)=>{
    await axios.post("http://localhost:3333/team/", {name})
    await getTeams()
    setName("")
  }

  return(
    <ContainerTeam>
      <div>
        <FormControl fullWidth>
          <InputLabel id="input-select">Times</InputLabel>
          <Select
            labelId="input-select"
            id="team-select"
            value={teamIdSelect}
            label="Times"
            onChange={(event)=>{setTeamIdSelect(event.target.value)}}
          >
            {teams.map((team, index)=>{
              return(
                <MenuItem 
                  key={index} 
                  value={team.id} 
                >
                  {team.name}
                </MenuItem>
            )})}
          </Select>
        </FormControl>
      </div>
      <TextField 
        label="adicione um time" 
        variant="outlined" 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
      />
      <Button variant="outlined" onClick={()=>{handleAddTeam(name)}}>Adicionar time</Button>
    </ContainerTeam>
  )
}
export default Team