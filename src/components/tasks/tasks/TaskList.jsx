import React from 'react';

/**
 * TaskList component for displaying tasks.
 * Receives tasks array and callback functions for toggling and deleting tasks.
 */
export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <div className="space-y-3">
      <ul>
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
              <span
                className={task.completed ? 'line-through text-gray-400' : ''}
              >
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
      </ul>
    </div>
  );
}

