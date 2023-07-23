import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import HeadAndNav from "./components/headerAndNavbar/HeadAndNav";
import Footer from "./components/Footer/Footer";
import { WidthContext } from "./context/index";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import PromocodesPage from "./pages/PromocodesPage/PromocodesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Root from "./pages/Root/Root";

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
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<MainPage />} />
          <Route path="promo" element={<PromocodesPage />} />
          <Route path="promo/promo" element={<PromocodesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </WidthContext.Provider>
  );
}

export default App;
