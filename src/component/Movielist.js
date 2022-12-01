import React from "react";
import { FaTrashRestore} from "react-icons/fa"
import { FaImdb } from "react-icons/fa";

const MovieList = (props) => {

  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-2 col-6 col-sm-4 col-md-3" key={movie.id}>
          <div className="card shadow-sm mb-4 position-relative movie-card overflow-hidden" data-aos="flip-up">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              className="card-img-top movie-img img-fluid"
              alt={movie.name}
            />
            <div className="card-body movie-overlay position-absolute text-white d-flex flex-column justify-content-between ">
              <h5 className="card-title movie-title mt-2">{movie.title}</h5>
              <p className="card-text">{movie.overwiev}</p>
              <div className="d-flex justify-content-between align-items-center">
                  <FaTrashRestore
                  className="delete-icon"
                  onClick={(event) => props.removeMovieProp(movie)}/>
                <h2>
                  <span className="movie-vote-average">
                    <FaImdb className="me-2 imdb-icon" />
                    {movie.vote_average.toFixed(1)}
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
