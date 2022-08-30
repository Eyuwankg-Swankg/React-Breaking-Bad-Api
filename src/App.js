import { createContext, useEffect, useState } from "react";
import "./App.css";
import axios  from "axios";
import Container from "./Components/BodyContainer.jsx";
import Header from "./Components/Header";
import { DataContext } from "./Components/Context";
function App() {
  const [content, setContent] = useState([]);
  const baseUrl = "https://breakingbadapi.com/api/characters";
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setContent([...response.data]);
      console.log(response);
    });
  }, []);

  return (
    <div className="App">
      <DataContext.Provider value={content}>
        <Header />
        <Container />
      </DataContext.Provider>
    </div>
  );
}

export default App;
