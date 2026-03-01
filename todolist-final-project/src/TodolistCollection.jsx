import { v4 as uuid } from "uuid";
import TodolistItem from "./TodolistItem";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const initial = () => {
  const data = JSON.parse(localStorage.getItem("todo"));
  if (!data) {
    return []
  }
  return data
};

export default function TodolistCollection() {
  const [todo, setTodo] = useState(initial);

  const handleToggle = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      }),
    );
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const removeTodo = (id) => {
    setTodo((prevList) => prevList.filter((l) => l.id !== id));
  };

  const addTodo = (item) => {
    setTodo((prevList) => [
      ...prevList,
      { id: uuid(), ...item, completed: false },
    ]);
  };

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todo.map((list) => {
          return (
            <ListItem
              key={list.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => removeTodo(list.id)}
                >
                  <ClearIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => handleToggle(list.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                  checked={list.completed}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText id={list.id} primary={`${list.list}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <TodolistItem addTodo={addTodo} />
    </>
  );
}
