import React from "react";
import Navbar from "../components/Navbar";
import Greetings from "../components/Greetings";

import Cards from "../components/Cards";
import { useLocation, useNavigate } from "react-router-dom";
import CounterInfoCard from "../components/CounterInfoCard";

const Home = () => {
  const routeParams = useLocation();
  const { state } = routeParams || {};
  const { name } = state || {};

  const cardData = {
    info: [
      {
        title: "counter",
        desc: "Counter is used to increment and decrement of the count, there would be 2 buttons one is + and - if you click on  +the number will get increased and if you click on - then the number get decreased ",
        navi: "/counter",
      },
      {
        title: "Dhoni",
        desc: "player of CSK and was once captain of indian team",
        navi: "/upcoming",
      },
      {
        title: "Messi",
        desc: "player of argentina also have 2 or 3 golden boot award",
        navi: "/upcoming",
      },
      {
        title: "Lebron",
        desc: "player of Basketball who is currently the plsying with Lakers and is one of the best in USA ",
        navi: "/upcoming",
      },
    ],
  };
  const renderElement = cardData.info.map((item, key) => {
    return (
      <CounterInfoCard
        title={item.title}
        desc={item.desc}
        id={key}
        navig={`${item.navi}/${key + 1}`}
      />
    );
  });

  return (
    <div>
      {!name ? (
        <p className="wrapper invalid">Invalid Name</p>
      ) : (
        <div className="app-content">
          <Navbar name={name} />
          <div className="wrapper">
            <Greetings />
            <div className="all-cards">{renderElement}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
