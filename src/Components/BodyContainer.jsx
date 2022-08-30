import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import Card from "./Card";
import SearchBar from "./SearchBar";
let Container = () => {
  const content = useContext(DataContext);
  const [data, setData] = useState(content);
  useEffect(() => setData(content), [content]);
  function filterCharacters(searchString) {
    if (searchString == "") setData(content);
    else
      setData([
        ...content.filter((item) => {
          return (
            item.name.substring(0, searchString.length).toLowerCase() ==
            searchString.toLowerCase()
          );
        }),
      ]);
  }
  return (
    <div class="content-container">
      <SearchBar searchCharacters={filterCharacters} />
      <div class="card-container">
        {data !== undefined && data.length != 0 ? (
          data.map((item, index) => <Card cardItem={item} key={index} />)
        ) : (
          <h1>No Data!</h1>
        )}
      </div>
    </div>
  );
};
export default React.memo(Container);
