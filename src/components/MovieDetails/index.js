import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  let numMovieId = parseInt(movieId);

  const movieChoice = movies.find(({ id }) => id === numMovieId);

  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
