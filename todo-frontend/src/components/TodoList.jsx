export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p>No todos yet.</p>

  return (
    <ul>
      {todos.map(t => (
        <li key={t.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={!!t.completed}
            onChange={() => onToggle(t)} 
          />
          <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.content}
          </span>
          <button onClick={() => onDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
