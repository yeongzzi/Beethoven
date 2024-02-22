import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import './Home.css';
import './Search.css';

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  
  const getSearchMovie = async () => {
    const ID_KEY = 'id_key';
    const SECRET_KEY = 'secret_key';
    const search = value;
    
    try {
      if (search === '') {
        setMovies([]);
        setIsLoading(false);
      } else {
        const { data: { items } } = await axios.get(
          'https://openapi.naver.com/v1/search/movie.json',
          {
            params: {
              query: search,
              display: 20,
            },
            headers: {
              'X-Naver-Client-Id': ID_KEY,
              'X-Naver-Client-Secret': SECRET_KEY,
            },
          }
        );

        setMovies(items);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSearchMovie();
  }, []); // componentDidMount 역할

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchMovie();
  };

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading..</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input_div">
              <h1>영화 검색</h1>
              <input
                className="input_search"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="영화를 검색해 보세요."
              />
            </div>
            <div className="movies">
              {movies.map((movie) => (
                <SearchMovie
                  key={movie.link}
                  id={movie.link}
                  year={movie.pubDate}
                  title={movie.title}
                  poster={movie.image}
                  rating={movie.userRating}
                  director={movie.director}
                  actor={movie.actor}
                />
              ))}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Search;