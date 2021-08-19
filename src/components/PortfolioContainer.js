import React from "react";
import Stock from "./Stock";

function PortfolioContainer({porty, remS}) {
  {
    const d = porty.map( b=>
      <Stock key={b.id} c={b} onClick={remS}/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {d}
    </div>
  );
}}

export default PortfolioContainer;
