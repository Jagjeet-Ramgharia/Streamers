import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listitem.scss";

const ListItem = ({item,key}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="list_item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://stylecaster.com/wp-content/uploads/2019/03/jon-snow-3.jpg"
        alt=""
      />
      {isHovered && (
        <>
          {/* <video src={item.trailer} autoPlay={true} loop/> */}
          <div className="item_info">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="item_info_top">
              <span>1 hour 20 mins</span>
              <span className="limit">+{item.limit}</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard. 
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
