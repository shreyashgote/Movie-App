import "../css/Favorites.css";
import { useMovieContext } from "../Context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>your favorite movies</h2>

        <div className="movies-grid">
          {favorites.map((Movie) => (
            <MovieCard Movie={Movie} key={Movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorites </h2>
      <p>add movies to your list</p>
    </div>
  );
}
export default Favorites;
