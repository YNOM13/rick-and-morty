import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchingLocationsApi} from "../../redux/API_REQUESTS/locations";
import Loader from "../UI/Loader/Loader";
import LocationsList from "./LocationsList/LocationsList";
import "./Locations.scss"
import MyTitle from "../UI/MyTitle/MyTitle";
import PaginationForLocations from "../UI/LocationsUI/PaginationRoundedForLocations/PaginationForLocations";
import Button from "@mui/material/Button";
import {
  action_location_set_page, action_set_location_filter_by_dimension,
  action_set_location_filter_by_name, action_set_location_filter_by_type
} from "../../redux/Reducers/locationReducer";
import InputSearcher from "../UI/InputSearcher/InputSearcher";



export interface ILocation {
  name:string,
  id:number,
  type:string,
  dimension:string,
}
export interface IRootLocation {
  locations:any;
  page:number,
  data: ILocation[];
  loading: boolean;
  error: string | null;
}

const Locations = () => {
  const dispatch:any = useDispatch()
  const {data, loader, error, page, searchByName, searchByType, searchByDimension} = useSelector((state:IRootLocation) => state.locations)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [dimension, setDimension] = useState('')

  useEffect(()=>{
    dispatch(fetchingLocationsApi(page,searchByName,searchByType,searchByDimension))
  },[page, searchByName, searchByType, searchByDimension])

  const handleSearchButtonClick = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(action_location_set_page(0))
    dispatch(action_set_location_filter_by_name(name))
    dispatch(action_set_location_filter_by_type(type))
    dispatch(action_set_location_filter_by_dimension(dimension))
  };

  const handleKeyPressForName = (event: ChangeEvent<HTMLInputElement>) => {
   setName(event.target.value)
  };

  const handleKeyPressForType = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value)
  };

  const handleKeyPressForDimension = (event: ChangeEvent<HTMLInputElement>) => {
    setDimension(event.target.value)
  };

  const clearButton = () => {
    setName('')
    setType('')
    setDimension('')
  }


  if (loader) return <Loader/>
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="container-table">
        <MyTitle>Locations</MyTitle>
        <form className="form" onSubmit={handleSearchButtonClick}>
          <InputSearcher
            value={name}
            onKeyPress={handleKeyPressForName}
            label={'search by name'}
          />
          <InputSearcher
            value={type}
            onKeyPress={handleKeyPressForType}
            label={'search by type'}
          />
          <InputSearcher
            value={dimension}
            onKeyPress={handleKeyPressForDimension}
            label={'search by dimension'}
          />
          <div className="wrapping">
            <Button style={{margin:'5px', background:'#1476D218'}} className="button" type='submit'>Search</Button>
            <Button onClick={clearButton} style={{margin:'5px', background:''}} className="button">Clear All</Button>
          </div>
        </form>
        <LocationsList locations={data?.results}/>
      </div>
      <div className="container">
        <PaginationForLocations/>
      </div>
    </>

  );
};

export default Locations;