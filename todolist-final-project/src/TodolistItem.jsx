import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function TodolistItem({ addTodo }) {
  const [todo, setTodo] = useState({ list: "" });

  const handleChanged = (e) =>
    setTodo((curr) => ({ ...curr, list: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({ list: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="filled-basic"
        label="New Item"
        variant="filled"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <CreateIcon />
              </InputAdornment>
            ),
          },
        }}
        onChange={handleChanged}
        value={todo.list}
      />
    </form>
  );
}
