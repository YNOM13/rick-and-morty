import React from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import "./CharacterItem.scss"
import ModalInfo from "../../UI/CharactersUI/ModalInfo/ModalInfo";

interface CharacterItemProps {
  personalMoreInfo: any;
  characterItem: {
    name: string;
    gender: string;
    image: string;
    species: string;
    status: string;
    type?: string;
  };
}

const  CharacterItem = ({personalMoreInfo,characterItem}:CharacterItemProps) => {
  const { name, gender, image, species, status, type } = characterItem;

  return (
    <Card className="characters-card" sx={{ maxWidth: 220 }}>
      <img className="characters-card__img" src={image} alt={name}/>
      <CardContent className="characters__card-content">
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          <span className="decoration">species:</span> {species}
        </Typography>
        <Typography variant="body2">
          <span className="decoration">type:</span> {type ? type : 'none'}
        </Typography>
        <Typography variant="body2">
          <span className="decoration">status:</span> {status}
        </Typography>
        <Typography variant="body2">
          <span className="decoration">gender:</span> {gender}
        </Typography>

      </CardContent>
      <CardActions className="characters__buttons">
        <ModalInfo characterInfo={personalMoreInfo}/>
      </CardActions>
    </Card>
  );
};

export default CharacterItem;