import React from 'react';
import { Box, Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import MoveTrandCard from '../movie-card/movieTrand';

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList: React.FC<MovieTrendListProps> = ({ trendingList }) => {

  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {trendingList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MoveTrandCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieTrendList;
