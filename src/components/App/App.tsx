import React from 'react';
import "./App.scss"
import Header from "../Header/Header";
import { Route, Routes} from "react-router-dom";
import Characters from "../Characters/Characters";
import Episodes from "../Episodes/Episodes";
import Locations from "../Locations/Locations";
import MyWatchList from "../MyWatchList/MyWatchList";
import HomePage from "../HomePage/HomePage";
function App() {
  return (
    <div className="main">
      <Header/>
      <Routes>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/mywatchlist" element={<MyWatchList/>}/>
        <Route path="/*" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;