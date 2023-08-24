import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {IRootCharacters} from "../../../Characters/Characters";
import {action_characters_set_gender,action_set_page_characters} from "../../../../redux/Reducers/characterReducer";

const SelectForCharactersGender = () => {
  const dispatch = useDispatch()
  let {gender} = useSelector((state:IRootCharacters)=>state.characters)

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(action_set_page_characters(0))
    dispatch(action_characters_set_gender(e.target.value))
  };


  return (
    <Box className="box" sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          defaultValue=""
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="">Default</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="genderless">Genderless</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectForCharactersGender;