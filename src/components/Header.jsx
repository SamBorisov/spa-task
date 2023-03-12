import React from "react";

export default function Header(props) {



  return (
    <header>
      
     <h2 className="headerText">Support Desk</h2>

     <div className="searchContainer">
        <input type="text" placeholder="Search.." name="search" value={props.value} onChange={(e) => props.setValue(e.target.value)}/>
        <button><img src="icon-search.svg" alt="serchIcon"/></button>
     </div>

    </header>
  );
}


