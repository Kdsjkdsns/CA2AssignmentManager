// src/App.js - Remove the merge conflict markers
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CardList from "./pages/CardList";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import Login from "./pages/login"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/allCard" element={<CardList />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/editcard/:id" element={<EditCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
