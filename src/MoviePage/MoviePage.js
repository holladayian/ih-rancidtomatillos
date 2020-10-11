import React from 'react';
import ReactPlayer from 'react-player';
import MovieCard from './MovieCard/MovieCard';
import MovieHeader from './MovieHeader/MovieHeader';
import './MoviePage.scss';

export default function Movie( {movieDetails, movieVideo} ) {

  const displayTrailer = () => {
    return movieVideo.map((video, i) => {
      return (
        <div key={i} className="movie-trailer" alt="movie trailer">
          <ReactPlayer
          alt="movie trailer"
          width={350}
          height={250}
          url={`www.youtube.com/watch?v=${video.key}`}
          />
        </div>
      )
    })
   }

  return (
    <div className="movie-container">

        <div className="movie-wrapper">

            <MovieHeader movieDetails={movieDetails}/>
          <div className="a img-container">
            <img 
              className="trailer-image"
              src={movieDetails.backdrop_path}
              alt="" 
              />
          </div>

            {/* move this  traile container to its own component */}
          <div className=" trailer-container">
          {movieVideo.length > 0 && <div className="trailerList">{displayTrailer()}</div>}
          </div>

            <MovieCard movieDetails={movieDetails}/>

        </div>
 
    </div>
  )
}
