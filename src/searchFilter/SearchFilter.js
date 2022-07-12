import React from "react";
import data from "./MOCK_DATA.json";
import { useState } from "react";

function SearchFilter() {
  const [name, setName] = useState("");

 
  const handleInput = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <input type="search"  
      onChange={(event) => {
    setName(event.target.value);
  }
} />
      <button>Search</button>
      {data.filter(val=>{
        if(name==""){
            return val
        }else if(val.first_name.toLowerCase().includes(name.toLowerCase())){
            return val
        }
      }).map((data,key) => {
        return <p key={key}>{data.first_name}</p>;
      })}
    </div>
  );
}

export default SearchFilter;
