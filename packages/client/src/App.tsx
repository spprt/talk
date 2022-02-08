import React from "react";
import { Routes, Route } from "react-router-dom";
import Friends from "./pages/Friends";
import Lobby from "./pages/Lobby";
import RoomDetail from "./pages/RoomDetail";
import RoomList from "./pages/RoomList";
import SeeMore from "./pages/SeeMore";

function App() {
  return (
    <Routes>
      {/* Lobby */}
      <Route index element={<Lobby />} />
      {/* Friends */}
      <Route path="/friends" element={<Friends />} />
      {/* RoomList */}
      <Route path="/rooms" element={<RoomList />} />
      {/* RoomDetail */}
      <Route path="/rooms/:roomId" element={<RoomDetail />} />
      {/* SeeMore */}
      <Route path="/more" element={<SeeMore />} />
    </Routes>
  );
}

export default App;
