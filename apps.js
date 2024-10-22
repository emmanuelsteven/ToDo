import "./index.css";
import "./general.css";
import { MdDelete } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";

// import { RiDeleteBin5Line } from "react-icons/ri";

import CurrentDateInfo from "./Date.js";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState(TaskItem);

  function handleDeleteItem(id) {
    setTask((tasks) => tasks.filter((task) => task.id !== id));
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
        <Task onDelete={handleDeleteItem} />
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
        <div className="activity-container" s>
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

const TaskItem = [
  {
    id: 1,
    activity: "Client Review & Feedback",
    time: "09:15am - 12.00pm",
  },
  {
    id: 2,
    activity: "Client Review & Feedback",
    time: "09:15am - 12.00pm",
  },
  {
    id: 3,
    activity: "Client Review & Feedback",
    time: "09:15am - 12.00pm",
  },
];

const Tasks = TaskItem;

function Task({ onDelete }) {
  return (
    <section className="task-card">
      <div className="card-container">
        <h3>Daily To-Do</h3>
        {/* <RiDeleteBin5Line />
        <SlCalender /> */}
        <p>Today</p>
        <ul>
          {TaskItem.map((task) => (
            <Tasker taskobj={task} key={task.id} onDelete={onDelete} />
          ))}

          {/* <li className="check-list">
            <input type="checkbox" />
            <p>Client Review & Feedback</p>

            <span className="del">
              <MdDelete />
            </span>
          </li>
          <li className="check-list">
            <input type="checkbox" />
            <p>Crypto Wallet Redesign</p>
            <span className="del">🗑️</span>
          </li>
          <li className="check-list">
            <input type="checkbox" />
            <p>Create Wireframe</p>
            <span className="del">🗑️</span>
          </li>
          <li>
            <span>today 09:11am - 10:45pm</span>
          </li> */}
        </ul>
        <input type="text" placeholder="+ add new task" />{" "}
        <span>
          <button href="">add task </button>
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
