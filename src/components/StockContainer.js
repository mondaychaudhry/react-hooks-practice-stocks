import React from "react";
import Stock from "./Stock";

function StockContainer({stox, addS}) {
  const a = stox.map( b=>
    <Stock key={b.id} c={b} addS={addS}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {a} 
    </div>
  );
}

export default StockContainer;
