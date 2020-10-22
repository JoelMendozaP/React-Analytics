import React, { useEffect } from "react";
import "./App.css";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-KGSTLYFBPM");
    ReactGa.pageview("/home");
  }, []);
  return (
    <div className="App">
      <header className="App-header">Hola mundo</header>
    </div>
  );
}

export default App;
