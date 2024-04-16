import React from "react";
import Navbar from "../components/Navbar";
import Greetings from "../components/Greetings";

import Cards from "../components/Cards";
import { useLocation, useNavigate } from "react-router-dom";
import CounterInfoCard from "../components/CounterInfoCard";

const Home = () => {
  const navigate = useNavigate();
  const routeParams = useLocation();
  const { state } = routeParams || {};
  const { name } = state || {};

  // console.log("name:", name);

  return (
    <div>
      {!name ? (
        <p className="wrapper invalid">Invalid Name</p>
      ) : (
        <div className="app-content">
          <Navbar name={name} />
          <div className="wrapper">
            <Greetings />
            <div className="all-cards">
              <div
                onClick={() => navigate("/counter")}
                className="count-info-card"
              >
                <CounterInfoCard
                  title={"Counter"}
                  desc={
                    "Counter is used to increment and decrement of the count, there would be 2 buttons one is + and - if you click on  +the number will get increased and if you click on - then the number get decreased "
                  }
                  // navigate={"/counter"}
                  navigate={navigate("/counter")}
                />
              </div>
              <div
                onClick={() => navigate("/upcoming")}
                className="count-info-card"
              >
                <CounterInfoCard
                  title={"Dhoni"}
                  desc={"player of CSK and was once captain of indian team"}
                  navigate={"/upcoming"}
                />
              </div>
              <div
                onClick={() => navigate("/upcoming")}
                className="count-info-card"
              >
                <CounterInfoCard
                  title={"Messi"}
                  desc={
                    "player of argentina also have 2 or 3 golden boot award"
                  }
                  navigate={"/upcoming"}
                />
              </div>
              <div
                onClick={() => navigate("/upcoming")}
                className="count-info-card"
              >
                <CounterInfoCard
                  title={"Lebron"}
                  desc={
                    "player of Basketball who is currently the plsying with Lakers and is one of the best in USA  "
                  }
                  navigate={"/upcoming"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
