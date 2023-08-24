import React from 'react';
import {IEpisode, IRootEpisodes} from "../Episodes";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {useSelector} from "react-redux";
import {Alert} from "@mui/material";

interface IEpisodeElement {
  episodes:IEpisode[]
}
const EpisodesList = ({episodes}:IEpisodeElement) => {
  const {data} = useSelector((state:IRootEpisodes)=>state.episodes)
  const results = data?.results || []

  if(!results.length){
    return (
      <div className="error-meaning">
        <Alert severity="error">Not found the character</Alert>
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
                Season
              </span>
            </TableCell>
            <TableCell align="right">
              <span className="decoration">
                Date
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
              <TableCell align="right">{row.episode}</TableCell>
              <TableCell align="right">{row.air_date}</TableCell>
              <TableCell align="right">{row.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodesList;