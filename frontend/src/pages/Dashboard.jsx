// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState(null);

  // ✅ Task Form State
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "Todo",
    dueDate: "",
    assignedTo: "",
    project: ""
  });

  // ✅ Fetch Profile
  const fetchProfile = async () => {
    try {
      const res = await API.get("/auth/me");
      setProfile(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //  Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //  Fetch Projects
  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await API.get("/auth/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ Load All Data
  useEffect(() => {
    fetchProfile();
    fetchTasks();
    fetchProjects();
    fetchUsers();
  }, []);

  // ✅ Create Task
  const createTask = async () => {
    try {
      const res = await API.post("/tasks", taskData);

      setTasks([...tasks, res.data]);

      alert("Task Created");

      // Reset Form
      setTaskData({
        title: "",
        description: "",
        status: "Todo",
        dueDate: "",
        assignedTo: "",
        project: ""
      });

    } catch (err) {
      alert(err.response?.data?.msg || "Failed");
    }
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: 20 }}>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2>Dashboard</h2>

        <button onClick={logout}>
          Logout
        </button>
      </div>

      {/* PROFILE */}
      {profile && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: 15,
            borderRadius: 10,
            marginBottom: 20
          }}
        >
          <h3>Profile</h3>

          <p>
            <strong>Name:</strong> {profile.name}
          </p>

          <p>
            <strong>Email:</strong> {profile.email}
          </p>

          <p>
            <strong>Role:</strong> {profile.role}
          </p>
        </div>
      )}

      <hr />

      {/* CREATE TASK */}
      <h3>Create Task</h3>

      {/* Title */}
      <input
        type="text"
        placeholder="Task Title"
        value={taskData.title}
        onChange={(e) =>
          setTaskData({
            ...taskData,
            title: e.target.value
          })
        }
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10
        }}
      />

      {/* Description */}
      <textarea
        placeholder="Task Description"
        value={taskData.description}
        onChange={(e) =>
          setTaskData({
            ...taskData,
            description: e.target.value
          })
        }
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10
        }}
      />

      {/* Status */}
      <select
        value={taskData.status}
        onChange={(e) =>
          setTaskData({
            ...taskData,
            status: e.target.value
          })
        }
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10
        }}
      >
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* Due Date */}
      <input
        type="date"
        value={taskData.dueDate}
        onChange={(e) =>
          setTaskData({
            ...taskData,
            dueDate: e.target.value
          })
        }
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10
        }}
      />

      {/* Assign User */}
      <select
        value={taskData.assignedTo}
        onChange={(e) =>
          setTaskData({
            ...taskData,
            assignedTo: e.target.value
          })
        }
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10
        }}
      >
        <option value="">
          Assign User
        </option>

        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name} ({u.role})
          </option>
        ))}
      </select>

      {/* Select Project */}
      <select
        value={taskData.project}
        onChange={(e) =>
          setTaskData({
            ...taskData,
            project: e.target.value
          })
        }
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10
        }}
      >
        <option value="">
          Select Project
        </option>

        {projects.map((p) => (
          <option key={p._id} value={p._id}>
            {p.title}
          </option>
        ))}
      </select>

      {/* Add Task Button */}
      <button
        onClick={createTask}
        style={{
          padding: 10,
          cursor: "pointer"
        }}
      >
        Add Task
      </button>

      <hr />

      {/* PROJECTS */}
      <h3>Projects</h3>

      {projects.length === 0 ? (
        <p>No Projects</p>
      ) : (
        projects.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 10
            }}
          >
            <strong>{p.title}</strong>

            <p>{p.description}</p>
          </div>
        ))
      )}

      <hr />

      {/* TASKS */}
      <h3>Tasks</h3>

      {tasks.length === 0 ? (
        <p>No Tasks</p>
      ) : (
        tasks.map((task) => {

          const overdue =
            task.dueDate &&
            new Date(task.dueDate) < new Date() &&
            task.status !== "Done";

          return (
            <div
              key={task._id}
              style={{
                border: "1px solid #ccc",
                padding: 15,
                borderRadius: 10,
                marginBottom: 15
              }}
            >
              <h4>{task.title}</h4>

              <p>
                <strong>Description:</strong>{" "}
                {task.description}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {task.status}
              </p>

              {task.project && (
                <p>
                  <strong>Project:</strong>{" "}
                  {task.project.title}
                </p>
              )}

              {task.assignedTo && (
                <p>
                  <strong>Assigned To:</strong>{" "}
                  {task.assignedTo.name}
                </p>
              )}

              {task.dueDate && (
                <p>
                  <strong>Due Date:</strong>{" "}
                  {new Date(task.dueDate).toLocaleDateString()}
                </p>
              )}

              {overdue && (
                <p style={{ color: "red" }}>
                  ⚠ Overdue Task
                </p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}