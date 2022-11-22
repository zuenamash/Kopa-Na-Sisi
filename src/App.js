import './App.css';
import { Routes, Route } from "react-router-dom"
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Customers from "./Components/Customers";
import Charts from "./Components/Charts";
import Home from "./Components/Home";

function App() {
  return (
    <div className="main">

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="nav">
        <div className="navbar">
          <Navbar />
        </div>

        <div>

          <Routes>

            <Route path='/' exact element={(<Home />)} />
            <Route path='/customers'  element={(<Customers />)} />
            <Route path='/charts'  element={(<Charts />)} />

          </Routes>

        </div>
      </div>

    </div>
  );
}

export default App;
