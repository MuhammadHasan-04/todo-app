import { useState } from 'react'

export default function LoginForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handle = async (e) => {
    e.preventDefault()
    await onSubmit(name, password)
    setName('')
    setPassword('')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handle}>
        <div>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          Password:{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
