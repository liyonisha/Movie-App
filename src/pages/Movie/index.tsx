import React, { SetStateAction, useContext, useState } from "react";
import Layout from "../../layouts";
import { Box, InputAdornment, InputBase, Paper, Typography, styled } from "@mui/material";
import { MovieContext } from "../../context/movie-context";
import { MovieDataType } from "../../assets/data";
import SearchIcon from "@mui/icons-material/Search";
import MovieList from "../../components/movie-list";

const Movie = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };

  const CustomInput = styled(InputBase)(({ theme }) => ({
    padding: theme.spacing(1),
    border: "1px solid #ccc",
    borderRadius: theme.shape.borderRadius,
    maxWidth:"100%",
    maxHeight:"30px",
    marginRight:"50px"
  }));

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
            placeholder="Search for Movies"
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
            {/* <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box> */}

            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                movies
              </Typography>
              <MovieList recommendList={ search === ""  ? movies : searchList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}" {""}{" "}
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Movie;
