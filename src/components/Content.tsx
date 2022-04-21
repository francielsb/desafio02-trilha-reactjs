import { MovieCard } from './MovieCard';

import '../styles/content.scss';
import { api } from '../services/api';
import { useEffect, useState } from 'react';

interface MovieResponseProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {  
  selectedGenreId: number;  
  title: string;    
}

export function Content({selectedGenreId, title}: ContentProps) {
  // Complete aqui
  const [movies, setMovies] = useState<MovieResponseProps[]>([]);  

  useEffect(() => {
    api.get<MovieResponseProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });    
  }, [selectedGenreId]);

  return (
    <>
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}