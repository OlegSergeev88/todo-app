import React from "react";
import "./App.css";
import Create from "./components/create";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Create />
      <Footer />
    </div>
  );
}

export default App;
