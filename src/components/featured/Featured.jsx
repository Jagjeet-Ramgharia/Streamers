import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
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
        src="https://stylecaster.com/wp-content/uploads/2019/03/jon-snow-3.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://stylecaster.com/wp-content/uploads/2019/03/jon-snow-3.jpg"
          alt=""
        />
        <span className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
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
