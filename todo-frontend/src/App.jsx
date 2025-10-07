import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import todoService from './services/todoservice.js'
import loginService from './services/loginservice.js'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const saved = window.localStorage.getItem('LoggedUserApp')
    if (saved) {
      const u = JSON.parse(saved)
      setUser(u)
      todoService.setToken(u.token)
    }
  }, [])

  useEffect(() => {
    const load = async () => {
      if (!user) return
      const data = await todoService.getAll()
      setTodos(data)
    }
    load()
  }, [user])

  const handleLogin = async (name, password) => {
    try {
      const u = await loginService.login({ name, password })
      setUser(u)
      window.localStorage.setItem('LoggedUserApp', JSON.stringify(u))
      todoService.setToken(u.token)
      const data = await todoService.getAll()
      setTodos(data)
    } catch {
      alert("Invalid username or password")
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('LoggedUserApp')
    setUser(null)
    setTodos([])
    todoService.setToken(null)
  }

  const createTodo = async (content) => {
    const created = await todoService.create(content)
    setTodos((prev) => [created, ...prev])
  }



  const handleToggle = async (todo) => {
    const updated = { ...todo, completed: !todo.completed }
    await todoService.update(todo.id, updated)
    setTodos(todos.map(t =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    ))
  }

  const deleteTodo = async (id) => {
    await todoService.remove(id)
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div>
      {!user ? (
        <LoginForm onSubmit={handleLogin} />
      ) : (
        <div>
          <p>
            Welcome, {user.name}!{' '}
            <button onClick={handleLogout}>Logout</button>
          </p>

          <TodoForm createTodo={createTodo} />

          <TodoList todos={todos} onToggle={handleToggle} onDelete={deleteTodo} />
        </div>
      )}
    </div>
  )
}

export default App
