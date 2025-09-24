import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Editor from "./pages/Editor"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex gap-4 p-4 bg-white shadow">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
        <Link to="/editor" className="text-blue-500">Editor</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </div>
  )
}

export default App
