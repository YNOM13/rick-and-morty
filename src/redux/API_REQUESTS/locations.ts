import {
  action_location_failed,
  action_location_loading,
  action_location_success
} from "../Reducers/locationReducer";


export const fetchingLocationsApi = (page:number, searchByName:string, searchByType:string, searchByDimension:string) => async (dispatch:any)  => {
  dispatch(action_location_loading())
  try {

    const optionalParamsForName = new URLSearchParams();
    if (searchByName.trim()) optionalParamsForName.append('name', searchByName);

    const optionalParamsForType = new URLSearchParams();
    if (searchByType.trim()) optionalParamsForType.append('type', searchByType);

    const optionalParamsForDimension = new URLSearchParams();
    if (searchByDimension.trim()) optionalParamsForDimension.append('dimension', searchByDimension);

    const apiUrl = `https://rickandmortyapi.com/api/location/?page=${page}`;
    const urlWithOptionalParams = `${apiUrl}&${optionalParamsForName.toString()}&${optionalParamsForType.toString()}&${optionalParamsForDimension.toString()}`;

    const response = await fetch(urlWithOptionalParams)

    const data = await response.json()
    const totalPages = data.info.pages

    dispatch(action_location_success(data,totalPages))


  }
  catch(e:any){
    dispatch(action_location_failed(e))
    dispatch(action_location_success([],0))
  }
}