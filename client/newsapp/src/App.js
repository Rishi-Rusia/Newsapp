import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newsitem from "./components/Newsitem";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Newsitem />
    </div>
  );
}
