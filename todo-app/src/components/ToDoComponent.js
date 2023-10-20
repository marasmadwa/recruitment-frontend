import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, sortTodo } from "../redux/actions";
import OverviewComponent from "./OverviewComponent";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import Style from "../styles/custom.module.css";

const ToDoComponent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  const [task, setTask] = useState("");

  const sortTasks = () => {
    dispatch(sortTodo());
  };

  const handleAddTask = () => {
    if (task) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  const overViewContent = {
    overview: "Overview",
    description:
      "Welcome to my simple and intuitive Task List app. Stay organized and boost your productivity by managing your tasks effortlessly.",
    keyFeatures: "Key Features:",
    taskList: "Task List:",
    taskListItems: [
      { text: "Keep track of your tasks with my easy-to-use list." },
      {
        text: "Add New Tasks: Quickly add new tasks with a user-friendly input field.",
      },
      { text: "Task Actions: Delete, or mark tasks as complete." },
      {
        text: " Task Sorting: Easily prioritize tasks by marking them as complete.",
      },
      {
        text: " Responsive Design: Enjoy a seamless experience on both desktop and mobile devices.",
      },
    ],
    howTo: "How to Use:",
    howToList: [
      { text: "Add your tasks by entering a description." },
      {
        text: "Delete, or mark tasks as complete by clicking the appropriate buttons.",
      },
      { text: "Completed tasks are moved to the bottom of the list." },
      { text: "Keep your tasks organized and stay on top of your to-do list!" },
    ],
    summary:
      "Simplify your life with my Task List app. Start managing your tasks more effectively today.",
  };

  return (
    <div className={Style.todo_wrapper}>
      <Fieldset className={Style.todo_fieldset} legend="Task List">
        <OverviewComponent overViewContent={overViewContent} />
        <Divider />
        <div className={Style.input_wrapper}>
          <h2>Your tasks:</h2>
        </div>
        <div className={Style.input_wrapper}>
          <InputText
            placeholder="Describe what you want to do."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={handleAddTask} label="Add task" icon="pi pi-plus" />
        </div>
        <Divider />
        <div className={Style.task_list_wrapper}>
          {tasks?.todos.length? (
            <ul>
              {tasks.todos.map((task) => (
                <li key={task.id}>
                  <div className={Style.col}>
                    <i className="pi pi-tag"></i>
                    <span className={task.completed ? Style.task_done : ""}>
                      {task.text}
                    </span>
                  </div>
                  <div className={Style.col}>
                    <div className={Style.button_wrapper}>
                      <Button
                        className={
                          !task.completed
                            ? Style.task_toggle_button
                            : Style.task_toggle_button_done
                        }
                        onClick={() => {
                          dispatch(toggleTodo(task.id));
                          sortTasks();
                        }}
                        label="Task completed"
                        icon={!task.completed ? "pi pi-check" : "pi pi-undo"}
                      />
                      <Button
                        className={Style.task_delete_button}
                        onClick={() => dispatch(deleteTodo(task.id))}
                        label="Delete"
                        icon="pi pi-times"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p>You haven't entered any tasks yet. Add a few.</p>
            </div>
          )}
        </div>
      </Fieldset>
    </div>
  );
};

export default ToDoComponent;
