import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import EventDetail from "./Page/EventDetail";
import Home from "./Page/Home";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eId" element={<EventDetail />} />
      </Routes>
    </div>
  );
}
