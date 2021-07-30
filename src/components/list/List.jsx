import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = ({list}) => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [clickLimit,setClickLimit] = useState(window.innerWidth / 230)
  const handleScrool = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlideNumber(slideNumber - 1);
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
    console.log(distance);
  };
  return (
    <div className="list">
      <span className="list_title">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider_arrow left"
          onClick={() => handleScrool("left")}
          style={{display : !isMoved &&"none"}}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item,index)=>{
            return(
              <>
              <ListItem item={item} key={index}/>
              </>
            )
          })}
         
        </div>
        <ArrowForwardIosOutlined
          className="slider_arrow right"
          onClick={() => handleScrool("right")}
        />
      </div>
    </div>
  );
};

export default List;
