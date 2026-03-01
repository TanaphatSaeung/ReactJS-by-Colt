import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodolistCollection from "./TodolistCollection";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "80px", fontWeight: "400" }}>Todos</h1>
        <TodolistCollection />
      </div>
    </>
  );
}

export default App;
