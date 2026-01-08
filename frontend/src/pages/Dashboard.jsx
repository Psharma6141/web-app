import api from "../services/api";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const saveTask = async () => {
    if (editId) {
      await api.put(`/tasks/${editId}`, { title });
      setEditId(null);
    } else {
      await api.post("/tasks", { title });
    }
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-xl mx-auto bg-slate-900 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Dashboard</h2>
          <button
            onClick={logout}
            className="text-red-400 hover:text-red-500"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-2 rounded bg-slate-800 outline-none"
            placeholder="Enter task..."
          />
          <button
            onClick={saveTask}
            className="bg-indigo-600 hover:bg-indigo-700 px-4 rounded"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        <ul>
          {tasks.map((t) => (
            <li
              key={t._id}
              className="flex justify-between items-center py-2 border-b border-slate-700"
            >
              <span>{t.title}</span>
              <div className="flex gap-3">
                <button
                  className="text-blue-400"
                  onClick={() => {
                    setTitle(t.title);
                    setEditId(t._id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-red-400"
                  onClick={() => deleteTask(t._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
