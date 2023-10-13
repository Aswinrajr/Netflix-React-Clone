import React, { useEffect, useState } from "react";
import "./RowPost.css";
import Youtube from "react-youtube";
import { imageUrl } from "../../Constants/Constants";
import axios from "../../Constants/Axios.js";
import { API_KEY } from "../../Constants/Constants";
import Swal from "sweetalert2";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  const [close, isClose] = useState(false);
  const closeVideo = () => {
    setUrlId("");
    isClose(false);
  };

  const handleMovies = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log("response for movie: ", response.data);
        if (response.results !== 0) {
          setUrlId(response.data.results[0]);
          isClose(true);
        } else {
          Swal.fire("Trailer is not available now !!");
        }
      })
      .catch((err) => {
        Swal.fire("Trailer is not available now !!");
      });
  };
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log("Movies: ", response);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    autoplay: 1,
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleMovies(movie.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {close && urlId && (
        <>
          <button className="closeButton" onClick={closeVideo}>X</button>
          <Youtube opts={opts} videoId={urlId.key} />
        </>
      )}
    </div>
  );
}

export default RowPost;
