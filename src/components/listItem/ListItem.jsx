import { List } from "@material-ui/core";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import "./listitem.scss";
const ListItem = ({ item, key }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie,setMovie] = useState({})

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movie/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmZkYWU4ZGU3OWEwNTE0Y2JhYTlmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzQ1MjQ4NCwiZXhwIjoxNjI3ODg0NDg0fQ.J0sJzr-QsKscAo7-xk3vhkeB7_hpSogsf1sc0haGOSI",
          },
        });
        console.log(res)
        setMovie(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getMovies()
  },[item]);

  return (
    <Link to={{pathname:"/watch", movie: movie}} className="link">
    <div
      className="list_item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          {/* <video src={item.trailer} autoPlay={true} loop/> */}
          <div className="item_info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="item_info_top">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
};

export default ListItem;
