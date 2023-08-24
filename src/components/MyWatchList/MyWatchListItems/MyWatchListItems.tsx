import React from 'react';
import "./MyWatchListItems.scss";
import MyWatchItem from "./MyWatchItem/MyWatchItem";
import {Alert, Container} from "@mui/material";

export interface ItemEpisode {
  id: string;
  name: string;
}

interface PropsWishEpisode {
  list: ItemEpisode[];
  deleteEpisode: (id: number) => void;
}

const MyWatchListItems = ({ list, deleteEpisode }:PropsWishEpisode) => {

  if(!list.length){
    return (
      <Container className="items-of-watch-list">
        <Alert severity="error">Not found the episode</Alert>
      </Container>
    )
  }

  return (
    <Container className="items-of-watch-list">
      {list.map((episode:any, index:number) => (
        <MyWatchItem index={index} key={episode.id} episode={episode} deleteEpisode={deleteEpisode} />
      ))}
    </Container>
  );
};


export default MyWatchListItems;
