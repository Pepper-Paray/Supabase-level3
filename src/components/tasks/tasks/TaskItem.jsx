import TaskList from "@components/tasks/TaskList";

export default function TaskList({ tasks = [], onToggle, onDelete }) {
    return (
      <div>
        {tasks.length === 0 && (
          <p className="text-gray-500">No tasks yet.</p>
        )}
  
        {tasks.map(task => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle?.(task.id)}
            />
            <span>{task.title}</span>
            <button onClick={() => onDelete?.(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
  