import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stox, setStox]=useState([])
const [porty, setPorty]=useState ([])

useEffect (() => {fetch('http://localhost:3001/stocks').then (x=>x.json())
.then(y=> setStox(y), [])
})

function addS (g) {
  const h = porty.find((i) => i.id === g.id)
  if (!h) {
    setPorty([...porty, g])
  }
}

function remS (r) {
  setPorty((porty) => porty.filter(s=>s.id !== r.id))
}
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stox={stox} addS={addS}/>
        </div>
        <div className="col-4">
          <PortfolioContainer porty={porty} remS={remS}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
