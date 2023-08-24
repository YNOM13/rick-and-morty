import React from 'react';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {useDispatch, useSelector} from "react-redux";
import {action_set_page_episodes} from "../../../../redux/Reducers/episodeReducer";
import {IRootEpisodes} from "../../../Episodes/Episodes";

const PaginationRoundedForEpisodes = () => {
  const dispatch = useDispatch()
  const {page, totalPages} = useSelector((state:IRootEpisodes) => state.episodes)

  const handleOnChange = (e:any, page:number) => {
    dispatch(action_set_page_episodes(page))
  }

  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} onChange={handleOnChange} page={page} variant="outlined" shape="rounded" />
    </Stack>
  );
};

export default PaginationRoundedForEpisodes;