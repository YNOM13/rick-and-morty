import React from 'react';
import "./MyWatchItem.scss";
import { IEpisode } from "../../../Episodes/Episodes";
import Button from "@mui/material/Button"; // Make sure to provide the correct path

interface IItemOfList {
  episode: IEpisode;
  deleteEpisode: (id: number) => void;
  index:number
}

const MyWatchItem = ({episode, deleteEpisode, index }:IItemOfList) => {
  return (
    <div className="watch-list">
      <div>{index + 1}</div>
      <div className="watch-name">{episode.name}</div>
      <Button onClick={()=>deleteEpisode(episode.id)}>delete</Button>
    </div>
  );
};

export default MyWatchItem;
