import React from "react";
import "./styles/App.scss";
import MainPage from "./pages/MainPage";
import HeadAndNav from "./components/headerAndNavbar/HeadAndNav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeadAndNav />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
