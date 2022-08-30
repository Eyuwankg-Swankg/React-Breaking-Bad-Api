import React, { useContext,useState } from "react";
import { DataContext } from "./Context";
import Card from "./Card"
import SearchBar from "./SearchBar"
let Container = () => {
  const content = useContext(DataContext);
  const [data,setData] = useState(content);
  function filterCharacters(searchString){
    console.log(searchString);
  }
  return (
    <div class="content-container">
      <SearchBar searchCharacters={filterCharacters}/>
      <div class="card-container">
        {content !== undefined && content.length != 0
          ? content.map((item, index) => (
              <Card cardItem={item}/>
            ))
          :
           <h1>No Data!</h1>
          }
      </div>
    </div>
  );
};
export default React.memo(Container);
