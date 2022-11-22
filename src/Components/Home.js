import React from 'react';
import "./Home.css";
import { GiProgression, GiProfit } from "react-icons/gi";
import { BsFillCartCheckFill} from "react-icons/bs"
import { HiUsers } from "react-icons/hi";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DoughnutChart from "../Charts/DoughnutChart";

const Home = () => {
  return (
    <div>
      <div className="home-container">

        <div className="box">
        </div>

        <div className="box">

          <div className="box-icon">
            <HiUsers />
          </div>
          <div className="box-data">
            <span>New Customers</span>
            <h1>+24</h1>
          </div>

        </div>
        <div className="box">

          
        </div>
        <div className="box">



        </div>
      </div>

      
    </div>
  )
}

export default Home 