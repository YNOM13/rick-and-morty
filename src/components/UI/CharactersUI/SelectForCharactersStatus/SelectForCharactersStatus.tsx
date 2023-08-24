import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {IRootCharacters} from "../../../Characters/Characters";
import {action_characters_set_status, action_set_page_characters} from "../../../../redux/Reducers/characterReducer";

const SelectForCharactersStatus = () => {
  const dispatch = useDispatch()
  let {status} = useSelector((state:IRootCharacters)=>state.characters)

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(action_set_page_characters(0))
    dispatch(action_characters_set_status(e.target.value))
  };

  return (
    <Box className="box" sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          defaultValue=""
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="">Default</MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectForCharactersStatus;