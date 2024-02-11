function TodoItem2() {
  let todoName = "Go to  College";
  let todoDate = "4/10/2023";

  return (
    <center className="todo-container">
      <div className="container text-center">
        <div className="row ok-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            {" "}
            <button type="button" className="btn btn-danger ok-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default TodoItem2;
