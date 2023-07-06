import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {

  function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  const[tours, setTours] = useState(data);

  function refresh(){
    setTours(data);
  }

  if(tours.length === 0){
    return(
    <div className="refresh">
      <h2 className="no">No Tour found</h2>
      <button className="btn-white" onClick={refresh}>Refresh</button>
    </div>)
  }

  return (
    <div>

      <Tours className="App" tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  );
};

export default App;
