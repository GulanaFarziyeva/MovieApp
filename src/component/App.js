import React from "react";
import SearchBar from "./Searchbar";
import MovieList from "./Movielist";
import axios from "axios";
import "../assets/style.css";
import Hero from "./Hero";

class App extends React.Component {
  state = {
    movies: [],

    searchQueary: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=fa5adc2b06b93605ca3f37e83ffdde0d"
    );

    this.setState({ movies: response.data.results });
  }

  deletedMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter(
      (item) => item.id !== movie.id
    );

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({
      searchQueary: event.target.value,
    });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toUpperCase()
          .indexOf(this.state.searchQueary.toUpperCase()) !== -1
      );
    });

    return (
      <div className="background">
        <Hero />

        <SearchBar searchMovieProp={this.searchMovie} />

        <div className="row mt-4">
          <div className="col-lg-11 m-auto mt-4">
            <MovieList
              movies={filteredMovies}
              deletedMovieProp={this.deletedMovie}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
