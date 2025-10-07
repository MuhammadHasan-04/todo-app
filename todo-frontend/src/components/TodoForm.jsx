import { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [content, setContent] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!content.trim()) return   
    createTodo(content.trim())   
    setContent('')
  }

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Add a todo..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
