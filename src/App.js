import { createContext, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Container from "./Components/BodyContainer.jsx";
import Header from "./Components/Header";
import {ContentContext} from "./Components/Context"
function App() {
  const [content, setContent] = useState([]);
  const baseUrl = "https://breakingbadapi.com/api/characters";
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setContent(response.data);
    });
  }, []);
  
  return (
    <div className="App">
      <ContentContext.Provider value={content}>
        <Header />
        <Container />
      </ContentContext.Provider>
    </div>
  );
}

export default App;
