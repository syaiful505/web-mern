import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lobby from './components/Main';
import Task from "./components/admin/Task";

function App() {
    return (
      <>
            <Routes>
                <Route path="/task" element={<Task />} />
                <Route path="*" element={<Lobby />} />
            </Routes>
      </>
    );
}

export default App;
