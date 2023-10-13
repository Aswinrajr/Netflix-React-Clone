import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer"
import { originals, action,comedy,horror } from "./Urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title={"Netflix Originals"} />
      <RowPost url={action} title={"Action Movies"} isSmall />
      <RowPost url={horror} title={"Horror Movies"} isSmall />
      <RowPost url={comedy} title={"Comedy Movies"} isSmall />
      <Footer/>
    </div>
  );
}

export default App;
