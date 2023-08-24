import React from 'react';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {useDispatch, useSelector} from "react-redux";
import {IRootLocation} from "../../../Locations/Locations";
import {action_location_set_page} from "../../../../redux/Reducers/locationReducer";

const PaginationForLocations = () => {

  const dispatch = useDispatch()
  const {page, totalPages} = useSelector((state:IRootLocation) => state.locations)

  const handleOnChange = (e:any, page:number) => {
    dispatch(action_location_set_page(page))
  }
  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} onChange={handleOnChange} page={page} variant="outlined" shape="rounded" />
    </Stack>
  );
};

export default PaginationForLocations;