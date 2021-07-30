import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./featured.scss";

const Featured = ({ type,setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await axios.get(`/movie/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmZkYWU4ZGU3OWEwNTE0Y2JhYTlmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzQ1MjQ4NCwiZXhwIjoxNjI3ODg0NDg0fQ.J0sJzr-QsKscAo7-xk3vhkeB7_hpSogsf1sc0haGOSI",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomMovie();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">crime</option>
            <option value="fantasy">fantasy</option>
            <option value="historical">historical</option>
            <option value="horror">horror</option>
            <option value="romance">romance</option>
            <option value="sci-fi">sci-fi</option>
            <option value="thriller">thriller</option>
            <option value="western">western</option>
            <option value="animation">animation</option>
            <option value="drama">drama</option>
            <option value="documentary">documentary</option>
          </select>
        </div>
      )}
      <img
        src={content.imgTitle}
        alt=""
      />
      <div className="info">
        <img
          src={content.imgSm}
          alt=""
        />
        <span className="desc">
        {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
