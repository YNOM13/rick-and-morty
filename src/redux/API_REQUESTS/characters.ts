import {
  action_characters_failed,
  action_characters_loading,
  action_characters_success,
} from "../Reducers/characterReducer";

export const fetchingCharactersApi = (page: number, status: string, search: string, gender: string) => async (dispatch: any) => {
  dispatch(action_characters_loading());

  try {
    const optionalParams = new URLSearchParams();

    if (search.trim()) optionalParams.append('name', search);


    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`;
    const urlWithOptionalParams = `${apiUrl}&${optionalParams.toString()}`;

    const response = await fetch(urlWithOptionalParams);
    const data = await response.json();
    const totalPages = data.info.pages;

    dispatch(action_characters_success(data, totalPages));

  } catch (e: any) {
    dispatch(action_characters_failed(e));
    dispatch(action_characters_success([], 0));
  }
};
