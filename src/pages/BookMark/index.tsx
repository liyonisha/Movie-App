import React, { useState, useContext, useEffect } from "react";
import Layout from "../../layouts";
import { MovieContext } from "../../context/movie-context";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data"; 

const BookMark: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const bookmark = movies.filter((movie: MovieDataType) => movie.isBookmarked);

  useEffect(() => {
    const newList = movies.filter((movie: MovieDataType) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  }, [search, movies]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Tv-Seriess
              </Typography>
              <MovieList recommendList={bookmark} />
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

export default BookMark;
