import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "../../axios";
import "./Home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(false);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type: ""}${genre ? "&genre=" + genre:""}`,{
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmZkYWU4ZGU3OWEwNTE0Y2JhYTlmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzQ1MjQ4NCwiZXhwIjoxNjI3ODg0NDg0fQ.J0sJzr-QsKscAo7-xk3vhkeB7_hpSogsf1sc0haGOSI"
            }
          }
        );
        // console.log(res)
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList()
  },[genre,type]);
  return (
    <>
      <div className="home">
        <Navbar />
        <Featured type={type} setGenre={setGenre} />
        {lists.map((list)=>{
          return(
            <>
            <List list={list}/>
            </>
          )
        })}
      </div>
    </>
  );
};

export default Home;
