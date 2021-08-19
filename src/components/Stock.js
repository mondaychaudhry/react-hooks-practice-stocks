import React from "react";

function Stock({c, addS}) {
  function hClick () {
    addS(c)
  }
  return (
    <div>
      <div className="card" onClick={hClick}>
        <div className="card-body">
          <h5 className="card-title">{c.name}</h5>
          <p className="card-text">{c.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
