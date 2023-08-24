import {
  action_episode_failed,
  action_episode_loading,
  action_episode_success
} from "../Reducers/episodeReducer";


export const fetchingEpisodesApi = (page:number, search:string) => async (dispatch:any)  => {
  dispatch(action_episode_loading())
  try {
    const optionalParams = new URLSearchParams();

    if (search.trim()) optionalParams.append('name', search);

    const apiUrl = `https://rickandmortyapi.com/api/episode/?page=${page}`;
    const urlWithOptionalParams = `${apiUrl}&${optionalParams.toString()}`;

    const response = await fetch(urlWithOptionalParams)

    const data = await response.json()
    const totalPages = data.info.pages

    dispatch(action_episode_success(data,totalPages))
  }
  catch(e:any){
    dispatch(action_episode_failed(e))
    dispatch(action_episode_success([],0))
  }
}