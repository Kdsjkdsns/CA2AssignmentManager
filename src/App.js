// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AssignmentList from "./pages/AssignmentList";
import AddAssignment from "./pages/AddAssignment";
import EditAssignment from "./pages/EditAssignment";
import Login from "./pages/login";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/allAssignments" element={<AssignmentList />} />
                <Route path="/addAssignment" element={<AddAssignment />} />
                <Route path="/editAssignment/:id" element={<EditAssignment />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;