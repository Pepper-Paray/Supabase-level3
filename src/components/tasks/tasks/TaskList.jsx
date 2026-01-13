import  React from "react";

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="space-y-3">
      {tasks.length === 0 && (
        <p className="text-gray-500">No tasks yet.</p>
      )}

      {tasks.map(task => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-white p-3 rounded shadow"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span className={task.completed ? "line-through text-gray-400" : ""}>
              {task.title}
            </span>
          </div>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

// This component receives the list of tasks and two callback functions:
//  onToggle for toggling the completion status of a task, and onDelete for deleting a task.
//  It renders each task with a checkbox to mark it as completed and a delete button.
//  If there are no tasks, it displays a message indicating that there are no tasks yet.

