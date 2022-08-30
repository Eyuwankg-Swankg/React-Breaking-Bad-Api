import React, { useContext } from "react";
import { DataContext } from "./Context";

let Container = () => {
  const content = useContext(DataContext);
  return (
    <div class="grid-container">
      <div>
        {content !== undefined && content.length != 0
          ? content[0]["name"]
          : "df"}
      </div>
    </div>
  );
};
export default Container;
