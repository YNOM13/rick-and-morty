import React from 'react';
import {ILocation, IRootLocation} from "../Locations";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {Alert} from "@mui/material";
import {useSelector} from "react-redux";

interface ILocationItem {
  locations:ILocation[]
}
const LocationsList = ({locations}:ILocationItem) => {
  const {data} = useSelector((state:IRootLocation)=>state.locations)
  const results = data?.results || []

  if(!results.length){
    return (
      <div className="error-meaning">
        <Alert severity="error">Not found the location by name</Alert>
      </div>
    )
  }

  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <span className="decoration">
                Name
              </span>
            </TableCell>
            <TableCell align="right">
              <span className="decoration">
                Type
              </span>
            </TableCell>
            <TableCell align="right">
              <span className="decoration">
                Dimension
              </span>
            </TableCell>
            <TableCell align="right">
              <span className="decoration">
                Created
              </span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">{row.id}. {row.name}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.dimension}</TableCell>
              <TableCell align="right">{row.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LocationsList;