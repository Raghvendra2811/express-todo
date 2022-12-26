const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.json());
const port = process.env.PORT || 3001;



const {
  getAllTodos,
  addTodo,
  deleteTodo,
} = require("./todos");





app.get("/", (req, res) => res.type('html').send("hello"));




app.get("/todos", async (req, res) => {

  const todos = await  getAllTodos();

  return res.send({
    data: todos,
  });
});



app.post("/todos", (req, res) => {
  const todosData = req.body;
  const todo = addTodo(todosData);
  return res.send({
    data: todo,
  });
});



app.patch("/todos/:id", (req, res) => {
  const Data = req.body;
  const id = req.params.id;

const todo = updateTodoById(Number(id), Data);

return res.send({
  data: todo,
});
});




app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = deleteTodo(Number(id));
  if(todo){
      return res.send({
          data: todo,
        });
    }else{
      return res.status(404).send({
          message: "Todo does not exist"
      })
    }

});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));


