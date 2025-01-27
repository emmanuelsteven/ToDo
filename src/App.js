import "./index.css";
import "./general.css";
import { MdDelete } from "react-icons/md";
import CurrentDateInfo from "./Date.js";
import { useState } from "react";
import { GoTasklist } from "react-icons/go";
import { FaTasks } from "react-icons/fa";

export default function App() {
  // Initialize the state with TaskItem
  const [tasks, setTasks] = useState(TaskItem);

  function handleDeleteItem(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  return (
    <>
      <div className="app">
        <header className="app-header">
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-link">
                Messages
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Today's Task
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Last Activities
              </a>
            </li>
          </ul>
        </header>
        <Navbar />
        <Task
          tasks={tasks}
          onDelete={handleDeleteItem}
          onAddTask={handleAddTask}
        />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <section className="today-task">
      <div className="hero-decription">
        <div className="header">
          <h3 className="header-text">Today's Task</h3>
          <p>
            <CurrentDateInfo />
          </p>
        </div>
        <div>
          <a href="#" className="btn-add">
            + New task
          </a>
        </div>
        <div className="activity-container">
          <ul className="activity-list">
            <li className="task-list">
              <a href="#" className="task-item">
                All
              </a>
              <div className="num">35</div>
            </li>
            |
            <li className="task-list">
              <a href="#" className="task-item">
                Open
              </a>
              <span className="num">14</span>
            </li>
            <li className="task-list">
              <a href="#" className="task-item">
                Closed
              </a>
              <span className="num">19</span>
            </li>
            <li className="task-list">
              <a href="#" className="task-item">
                Archived
              </a>
              <span className="num">6</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Sample task items
const TaskItem = [
  {
    id: 1,
    activity: "Client Review & Feedback",
    time: "09:15am - 12.00pm",
  },
  {
    id: 2,
    activity: "Crypto Wallet Redesign",
    time: "01:00pm - 03.30pm",
  },
  {
    id: 3,
    activity: "Create Wireframe",
    time: "04:00pm - 06.00pm",
  },
];

function Task({ tasks, onDelete, onAddTask }) {
  const [activity, setActivity] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [timeFrom, setTimeFrom] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!activity || !timeFrom || !timeTo) return;
    const time = `${timeFrom} -${timeTo}`;
    const newTask = { activity, time, id: Date.now() };
    onAddTask(newTask);
    setActivity("");
    setTimeFrom("");
    setTimeTo("");
  }
  return (
    <section className="task-card">
      <div className="card-container">
        <h3>Daily To-Do</h3>
        <p>Today</p>
        <ul>
          {tasks.map((task) => (
            <Tasker
              taskobj={task}
              key={task.id}
              onDelete={onDelete}
              onAddTask={onAddTask}
            />
          ))}
        </ul>

        <span>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="AddTask..."
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <input
              type="time"
              placeholder="From"
              value={timeFrom}
              onChange={(e) => setTimeFrom(e.target.value)}
            />
            <label htmlFor="">Today</label>
            <input
              type="time"
              placeholder="To"
              value={timeTo}
              onChange={(e) => setTimeTo(e.target.value)}
            />
          </form>
          <button type="submit" onClick={handleSubmit}>
            Add Task
          </button>
        </span>
      </div>
    </section>
  );
}

function Tasker({ taskobj, onDelete }) {
  return (
    <li className="check-list">
      <input type="checkbox" />
      <p>{taskobj.activity}</p>
      <p>{taskobj.time}</p>

      <span className="del">
        <MdDelete onClick={() => onDelete(taskobj.id)} />
      </span>
    </li>
  );
}
