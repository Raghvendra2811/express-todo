const e = require("express");
const fs = require("fs/promises");

const todos = [
  {
    id: 1,
    taskname: "learn node",
    status :false,
    tag:"personal"
  }
];

async function getAllTodos() {
    let data = JSON.stringify(todos, null, 2);
    // console.log(data);
    return todos;
  }


  function addTodo(todo) {
    console.log(todo);
    let max = 0;
    todos.forEach((ele) => {
      if (max < ele.id) {
        max = ele.id;}});
    let newId = max + 1;
    const newTodoData = {
      ...todo,
      id: newId,
    };
    todos.push(newTodoData);
    return newTodoData;
  }

  function deleteTodo(id) {
    let index = -1;
  
    todos.forEach((ele, i) => {
      if (ele.id == id) {
        index = i;}});
    let tododelete;
    if (index != -1) {
      let result = todos.splice(index, 1);
  
      if (result.length) {
        tododelete = result[0];
      }
    }
    return tododelete;
  }


  function updateTodoById(id, todoData) {
    let index = -1;
  
    todos.forEach((ele, i) => {
      if (ele.id == id) {
        index = i;
      }
    });
  
    if (index != -1) {
      todos[index] = {
        ...todos[index],
        ...todoData,
      };
    }
    return todos[index];
  }
  

  module.exports = {
    getAllTodos,
    addTodo,
    deleteTodo,
    updateTodoById,
  };
  