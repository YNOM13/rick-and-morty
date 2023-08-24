import React, {ChangeEvent} from 'react';
import TextField from "@mui/material/TextField";

interface  IInputSearcherProps {
  onKeyPress: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?:string;
  label:string;
}

const InputSearcher: React.FC<IInputSearcherProps> = ({ onKeyPress, value, label }) => {
  return (
    <TextField
      sx={{m:1}}
      value={value}
      id="outlined-basic"
      label={label}
      variant="outlined"
      onChange={onKeyPress}
    />
  );
};

export default InputSearcher;