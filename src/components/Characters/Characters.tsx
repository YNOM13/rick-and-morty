import React, {ChangeEvent, useEffect, useState,} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingCharactersApi } from '../../redux/API_REQUESTS/characters';
import Loader from '../UI/Loader/Loader';
import CharactersList from './CharactersList/CharactersList';
import MyTitle from '../UI/MyTitle/MyTitle';
import PaginationRoundedForCharacters from '../UI/CharactersUI/PaginationRoundedForCharacters/PaginationRoundedForCharacters';
import SelectForCharactersStatus from '../UI/CharactersUI/SelectForCharactersStatus/SelectForCharactersStatus';
import SelectForCharactersGender from '../UI/CharactersUI/SelectForCharactersGender/./SelectForCharactersGender';
import {action_set_filter_characters, action_set_page_characters} from "../../redux/Reducers/characterReducer";
import Button from "@mui/material/Button";
import InputSearcher from "../UI/InputSearcher/InputSearcher";

export interface ICharacter {
  name: string;
  id: number;
  image: string;
  gender: string;
  species: string;
  status: string;
}

export interface IRootCharacters {
  characters: any;
  page: number;
  search: string;
  status: string;
  gender: string;
  data: ICharacter[];
  loading: boolean;
  error: string | null;
}

const Characters = () => {
  const [name, setName] = useState('')
  const dispatch: any = useDispatch();
  const {
    loader,
    error,
    page,
    status,
    search,
    gender,
  } = useSelector((state: IRootCharacters) => state.characters);

  useEffect(() => {
    dispatch(fetchingCharactersApi(page, status, search, gender));
  }, [page, status, gender, search]);

  const handleSearchButtonClick = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(action_set_page_characters(0))
    dispatch(action_set_filter_characters(name))
  };

  const handleKeyPress = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  const clearButton = () => {
    setName('')
  }

  if (loader) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <MyTitle>Characters</MyTitle>
      <div className="container container-for-filters">
        <SelectForCharactersStatus />
        <SelectForCharactersGender />
        <form className="form" onSubmit={handleSearchButtonClick}>
          <InputSearcher onKeyPress={handleKeyPress} value={name} label={'search by name'}/>
          <div className="wrapping">
            <Button style={{margin:'5px', background:'#1476D218'}} className="button" type='submit'>Search</Button>
            <Button onClick={clearButton} style={{margin:'5px', background:''}} className="button">Clear</Button>
          </div>
        </form>
      </div>
      <div className="container characters__elements">
        <CharactersList />
      </div>
      <div className="container">
        <PaginationRoundedForCharacters />
      </div>
    </>
  );
};

export default Characters;
