import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { BasketContext, IBasket } from "./context/basketContext";
import AppRouter from "./components/appRouter/AppRouter";

function App() {
  const [basket, setBasket] = useState<IBasket[]>([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <AppRouter />
    </BasketContext.Provider>
  );
}

export default App;
