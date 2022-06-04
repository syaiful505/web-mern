import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lobby from './components/Main';
import Dashboard from "./components/admin/Dashboard";

function App() {
    return (
      <>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Lobby />} />
            </Routes>
      </>
    );
}

export default App;
