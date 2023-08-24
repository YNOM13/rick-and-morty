import React from 'react';
import { IRootCharacters} from "../Characters";
import CharacterItem from "../CharacterItem/CharacterItem";
import "./CharactersList.scss"
import {useSelector} from "react-redux";
import {Alert} from "@mui/material";

const CharactersList = () => {
  const {data} = useSelector((state: IRootCharacters) => state.characters);

  const results = data?.results || []

  if(!results.length){
    return (
      <div className="error-meaning">
        <Alert severity="error">Not found the character</Alert>
      </div>
    )
  }

  return (
    <>
      {results.map((i:any)=><CharacterItem personalMoreInfo={i} characterItem={i} key={i.id}/>)}
    </>
  );
}


export default CharactersList;