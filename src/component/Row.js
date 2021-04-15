import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import './Row.css';
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] =useState([]);
    const [trailerUrl, settrailerUrl] = useState("")
    useEffect(() => {
       async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
       }
       fetchData();
    }, [fetchUrl]);
 
    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = async (movie) => {
        if (trailerUrl){
            settrailerUrl("");
        }
        else{
            try {
                let trailerurl = await axios.get(
                    `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
                );
                settrailerUrl(trailerurl.data.results[0]?.key);
            } catch (error) {
                alert("Trailer Not Avilable");
                settrailerUrl("");
            }
            
            
        };        
    };

    return (
        <div className="row">
            <h1 className="row_title">{title}</h1>
            <div className="row_posters">
                {movies.map(movies => (
                    <img key={movies.id} onClick={() => handleClick(movies)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`} alt={movies.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}

export default Row
