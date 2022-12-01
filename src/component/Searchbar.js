import React from "react";

function SearchBar(props) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  /* <form class="d-flex" role="search" onSubmit={handleFormSubmit}>
            <input
              class="me-2 rounded-pill text-white px-4 py-2"
              type="search"
              placeholder="Find Movies & TV"
              onChange={props.searchMovieProp}
              aria-label="Search"
            />
          </form>*/

  return (
    <div className="navbar-container">
     <nav className="navbar navbar-expand-lg navbar-menu px-2 d-flex align-items-center">
  <div className="container-fluid d-flex justify-content-between align-items-center">

      <img className="navbar-brand logo" src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg" alt="" />



    <form className="d-flex justify-content-end navbar-form" role="search" onSubmit={handleFormSubmit}>
            <input
              className=" search-input me-2 rounded-pill text-white w-50"
              type="search"
              placeholder="Find Movies & TV"
              onChange={props.searchMovieProp}
              aria-label="Search"
            />
          </form>
    
  </div>
</nav>
    </div>
  );
}

export default SearchBar;
