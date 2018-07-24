function handleSubmit(event) {
    // prevent page from reloading when form is submitted
  event.preventDefault();
  // get the value of the input field
  const input = document.querySelector('.searchForm-input').value;
  // remove whitespace from the input
  const searchQuery = input.trim();
  // call `fetchResults` and pass it the `searchQuery`
  fetchMovies(searchQuery);
}

function fetchMovies(searchQuery) {
  const endpoint = encodeURI(`http://www.omdbapi.com/?i=tt3896198&apikey=cab3fbdd&s=${searchQuery}`);
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const movies = data.Search;
      displayMovies(movies);
    })
    .catch(() => console.log('An error occurred'));
}

function displayMovies(movies) {
  // Store a reference to `.searchResults`
  const searchResults = document.querySelector('.searchResults');
  // Remove all child elements
  searchResults.innerHTML = '';

  // Loop over results array
  movies.forEach(movie => {
   const url = encodeURI(`http://www.omdbapi.com/?i=tt3896198&apikey=cab3fbdd&t=${movie.Title}`);
   let posterURL = encodeURI(`images/NoImage.png`);

   if (movie.Poster != "N/A") {
     posterURL = encodeURI(`${movie.Poster}`);
   }

   searchResults.insertAdjacentHTML('beforeend',
      `
      <div class="column">
        <h1><a href="${url}">${movie.Title}</a></h1>
        <img src="${posterURL}" onclick="fetchMovie('${movie.Title}')">
      </div>
      `
    );
  });
}

function fetchMovie(title) {
  const endpoint = encodeURI(`http://www.omdbapi.com/?i=tt3896198&apikey=cab3fbdd&t=${title}`);
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const movie = data;
      displayMovie(movie);
    })
    .catch(() => console.log('An error occurred'));
}

function displayMovie(movie) {
  const movieDetail = document.querySelector('.movieDetail');
  // Remove all child elements
  movieDetail.innerHTML = '<h1 class="title">' + movie.Title + '</h1>';
  for (var key in movie) {
    if( movie.hasOwnProperty(key) ) {
      movieDetail.insertAdjacentHTML('beforeend',
         `
          <h2>${key}:</h2>
          <h3>${movie[key]}</h3>
         `
       );
    }
  }
  showMovie();
}

const form = document.querySelector('.searchForm');
form.addEventListener('submit', handleSubmit);
