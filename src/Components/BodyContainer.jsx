import React, { useContext } from "react";
import { DataContext } from "./Context";

let Container = () => {
  const content = useContext(DataContext);
  return (
    <div class="content-container">
      <div class="card-container">
        {content !== undefined && content.length != 0
          ? content.map((item, index) => (
              <div class="card">
                <img src={item["img"]} class="card-img"/>
                <span class="card-name">{item.name}</span>
                <div class="card-detail">
                  <h1>{item.name}</h1>
                  <ul>
                    <li>
                      <strong>Actor Name:</strong> {item.portrayed}
                    </li>
                    <li>
                      <strong>Nickname:</strong> {item.nickname}
                    </li>
                    <li>
                      <strong>Birthday:</strong> {item.birthday}
                    </li>
                    <li>
                      <strong>Status:</strong> {item.status}
                    </li>
                  </ul>
                </div>
              </div>
            ))
          : "df"}
      </div>
    </div>
  );
};
export default React.memo(Container);
