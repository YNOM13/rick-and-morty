import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {IRootCharacters} from "../../../Characters/Characters";
import {action_set_page_characters} from "../../../../redux/Reducers/characterReducer";

const PaginationRoundedForCharacters = () => {
  const dispatch = useDispatch()
  const {page, totalPages} = useSelector((state:IRootCharacters) => state.characters)

  const handleOnChange = (e:any, page:number) => {

    dispatch(action_set_page_characters(page))
  }

  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} onChange={handleOnChange} page={page} variant="outlined" shape="rounded" />
    </Stack>
  );
};

export default PaginationRoundedForCharacters;