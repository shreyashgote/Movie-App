import "../css/MovieCard.css";
import { useMovieContext } from "../Context/MovieContext";
function MovieCard({ Movie }) {
  const { isFavorite, addToFavorites, removeFavorites } = useMovieContext();
  const favorite = isFavorite(Movie.id);
  function OnFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(Movie.id);
    else addToFavorites(Movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
          alt={Movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={OnFavoriteClick}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{Movie.title}</h3>
        <p>{Movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
export default MovieCard;
