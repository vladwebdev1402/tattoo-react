import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import HeadAndNav from "./components/headerAndNavbar/HeadAndNav";
import Footer from "./components/Footer/Footer";
import { WidthContext } from "./context/index";
import MainPage from "./pages/MainPage/MainPage";
import PromocodesPage from "./pages/PromocodesPage/PromocodesPage";
function App() {
  const [width, setWidth] = useState<number>(1920);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WidthContext.Provider value={width}>
      <div className="App">
        <HeadAndNav />
        {/* <MainPage /> */}
        <PromocodesPage />
        <Footer />
      </div>
      {width}
    </WidthContext.Provider>
  );
}

export default App;
