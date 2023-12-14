import { Route, Switch, NavLink } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav className="movie">
        {movies.map((item) => (
          <NavLink key={item.id} to={`/movies/${item.id}`}>
            {item.title}
          </NavLink>
        ))}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
