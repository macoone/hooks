import './App.css';
import {useState} from 'react'
import {movieData} from './MovieData'
import MovieList from './MovieList';
import AddMovie from './AddMovie'
import SearchMovie from "./SearchMovie";
function App() {
  const [movieList,SetmovieList] = useState(movieData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);
  console.log(movieList);
  const addNewMovie = (newMovie) => {
    SetmovieList([...movieList, newMovie]);
    
  }; 
  return (
<div className='wrapper'>
 <SearchMovie
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
      />
   <AddMovie addNewMovie={addNewMovie} />
  <MovieList movieList={movieList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch} />

    </div>
  );
}

export default App;
