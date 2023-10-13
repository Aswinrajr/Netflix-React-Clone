import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Constants/Axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import Youtube from "react-youtube";
import Swal from "sweetalert2";

function Banner() {
  const [movie, setMovie] = useState();
  const [urlId, setUrlId] = useState("");
  const [close, isClose] = useState(false);
  const closeVideo = () => {
    setUrlId("");
    isClose(false);
  };
  const opts = {
    height: "300",
    width: "100%",
    autoplay: 1,
    
  };

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const num = randomNum(1, 19);
        console.log(response.data.results[num]);
        console.log(num);
        console.log("Banner: ", response.data);
        setMovie(response.data.results[num]);
      });
  }, []);

  const playBanner = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.results !== 0) {
          setUrlId(response.data.results[0]);
          isClose(true);
          movie.overview=""
        } else {
          Swal.fire("Trailer is not available now !!");
        }
      });
  };

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
       

        <div className="banner_buttons">
          <button onClick={() => playBanner(movie.id)} className="button">
            Play
          </button>
          <button className="button">My List</button>
          {close && urlId && (
            <>
              <button className="closeButton" onClick={closeVideo}>
                X
              </button>
              <Youtube opts={opts} videoId={urlId.key} />
            </>
          )}
          
          
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
      
    </div>
  );
}

export default Banner;
