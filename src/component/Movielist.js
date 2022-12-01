import React from "react";
import "../assets/style.css";

const MovieList = (props) => {
  /* function handleClick() {
    console.log("Button clicked");
  } */

  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-2 col-md-4 col-6" key={movie.id}>
          <div className="card shadow-sm mb-4 position-relative movie-card overflow-hidden">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              className="card-img-top movie-img img-fluid"
              alt={movie.name}
            />
            <div className="card-body movie-overlay position-absolute text-white ">
              <h5 className="card-title mt-2">{movie.title}</h5>
              <p className="card-text">{movie.overwiev}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-md"
                  onClick={(event) => props.deletedMovieProp(movie)}
                >
                  Delete
                </button>
                <h2>
                  <span className="badge text-bg-info">
                    {movie.vote_average}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
