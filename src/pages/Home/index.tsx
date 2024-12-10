// import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
// import "../Home/style.css";
// import { ReactTyped } from "react-typed";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/about');
//   };

//   return (
//     <div>
//       <Box className="homeBoxStyle">
//         <Paper elevation={1} className="homePaperStyle">
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4} className="avatarGridStyle">
//               <Avatar
//                 alt="Liyonisha Premajeyanthan"
//                 src="/Nisha.png"
//                 className="avatarStyle"
//               />
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Typography variant="h4" className="introstyle">
//                 Hello, I'm
//               </Typography>
//               <Typography variant="h3" className="namestyle">
//                 <ReactTyped
//                   // strings={["Liyonisha Premajeyanthan"]}
//                   // typeSpeed={20}
//                   // backSpeed={25}
//                   // loop
//                 ></ReactTyped>
//               </Typography>
//               <Typography variant="h5" className="positionStyle">
//                 Software Engineer
//               </Typography>
//               <Typography className="captionStyle">
//                 As an IT enthusiast, I am deeply passionate about the boundless
//                 possibilities of technology to reshape the world. With a focus
//                 on Software Engineering.
//                 <br /> I am committed to perpetual learning and honing my
//                 problem-solving skills.
//               </Typography>
//               <Box className="avatarGridStyle">
//                 <Button variant="outlined" className="buttonStyle"  onClick={handleClick}>
//                   Contact Me
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>
//     </div>
//   );
// }

// export default Home;

import { SetStateAction, useContext, useState } from "react";
import Layout from "../../layouts";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, InputBase, Paper, Typography, styled } from "@mui/material";
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);

  const recommendList = movies.filter((item) => item.isTrending !== true);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList)
  };

  const CustomInput = styled(InputBase)(({ theme }) => ({
    padding: theme.spacing(1),
    border: "1px solid #ccc",
    borderRadius: theme.shape.borderRadius,
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
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
               
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
              
            </Box>

            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                
                Recommended for you
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>Found {searchList.length}  results for "{search}" {""} </Typography>
            <MovieList recommendList={searchList}/>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
