import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";
import BookmarkIcon from "../icons/bookmark-icon";



interface MoveTrandCardProps {
  movie: MovieDataType;
}
const MoveTrandCard = ({ movie }: MoveTrandCardProps) => {
  const { dispatch } = useContext(MovieContext);
const handleToggleBookmark = (id:string) =>{
  dispatch({type:"TOOGLR BOOKMARK",id})
}




  if (!movie || !movie.category) {
    return <div>Error: Invalid movie data</div>;
  }

  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt=""
          style={{ width: "300px", height: "100%", borderRadius: "8PX" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="(0,0,0,0.6)"
          borderRadius="8px"
        />
        <Stack
          mt="6"
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="year of movie"
              >
                {movie.year}
              </Typography>
            </Grid>

            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bgcolor: "#E0E0E0",
                  borderRadius: "fULL",
                }}
              />
            </Grid>

            <Grid item>
              {movie.category === "Movies" ? (
                <MovieIcon width={16} height={16} />
              ) : (
                <LiveTvIcon width={16} height={16} />
              )}
            </Grid>

            <Grid item>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="movie category"
              >
                {movie.category}
              </Typography>
            </Grid>

            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bgcolor: "#E0E0E0",
                  borderRadius: "fULL",
                }}
              />
            </Grid>

            <Grid item>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="movie rating"
              >
                {movie.rating}
              </Typography>
            </Grid>
          </Grid>
          <Typography color="#E0E0E0" padding={0} aria-label="movie title">
            {movie.title}
          </Typography>
        </Stack>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              p: "1rem",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            
            { movie.isBookmarked ?<BookmarkIcon fill={"#E0E0E0"} /> : <BookmarkEmptyIcon/>}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MoveTrandCard;
