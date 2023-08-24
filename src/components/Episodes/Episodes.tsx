import React, {ChangeEvent, useEffect, useState} from 'react';
import Loader from "../UI/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchingEpisodesApi} from "../../redux/API_REQUESTS/episodes";
import EpisodesList from "./EpisodesList/EpisodesList";
import "./Episodes.scss"
import MyTitle from "../UI/MyTitle/MyTitle";
import PaginationRoundedForEpisodes from "../UI/EpisodesUI/PaginationRoundedForEpisodes/PaginationRoundedForEpisodes";
import Button from "@mui/material/Button";
import {action_set_episodes_filter, action_set_page_episodes} from "../../redux/Reducers/episodeReducer";
import InputSearcher from "../UI/InputSearcher/InputSearcher";
export interface IEpisode {
  name:string,
  id:number,
  created:string,
  episode:string,
  air_date:string,
}
export interface IRootEpisodes{
  episodes:any;
  page:number
  data: IEpisode[];
  loading: boolean;
  error: string | null;
}

const Episodes = () => {
  const dispatch:any = useDispatch()
  const {data, error, loader, page, search} = useSelector((state:IRootEpisodes)=>state.episodes)
  const [name, setName] = useState('')

  useEffect(()=>{
    dispatch(fetchingEpisodesApi(page,search))
  },[page,search])

  const handleSearchButtonClick = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(action_set_page_episodes(0))
    dispatch(action_set_episodes_filter(name))
  };

  const handleKeyPress = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  const clearButton = () => {
    setName('')
  }

  if (loader) return <Loader/>
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="container-episodes">
        <MyTitle>Episodes</MyTitle>
        <form className="form" onSubmit={handleSearchButtonClick}>
          <InputSearcher label={'search by name'}
            value={name}
            onKeyPress={handleKeyPress}
          />
          <div className="wrapping">
            <Button style={{margin:'5px', background:'#1476D218'}} className="button" type='submit'>Search</Button>
            <Button onClick={clearButton} style={{margin:'5px', background:''}} className="button">Clear</Button>
          </div>
        </form>
        <EpisodesList episodes={data?.results}/>
      </div>
      <div className="container">
        <PaginationRoundedForEpisodes/>
      </div>
    </>
  );
};

export default Episodes;