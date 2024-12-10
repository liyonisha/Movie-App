import React, { useContext, useState, useEffect, ChangeEvent } from "react";
import Layout from "../../layouts";
import { MovieContext } from "../../context/movie-context";
import styled from "@emotion/styled";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import MovieList from "../../components/movie-list";
import SearchIcon from "@mui/icons-material/Search";
import { MovieDataType } from "../../assets/data";

const TvSeries: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  // Filter TV Series
  const tvSeries = movies.filter((movie: MovieDataType) => movie.category === "Tv Series");

  // Update search list based on the search input
  useEffect(() => {
    const newList = tvSeries.filter((movie: MovieDataType) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  }, [search, tvSeries]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const CustomInput = styled(InputBase)({
    borderRadius: "10px",
    color: "white",
  });

  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <CustomInput
            value={search}
            placeholder="Search for TV Series"
            onChange={handleSearch}
            sx={{ ml: 1, flex: 1, color: "white", border: "none" }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              TV Series
            </Typography>
            <MovieList recommendList={tvSeries} />
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default TvSeries;
