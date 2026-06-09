import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card text-center max-w-md w-full mx-4">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          E-Commerce App
        </h1>
        <p className="text-gray-500 mb-6">
          Module 1 — Project initialized successfully
        </p>
        <div className="space-y-2 text-sm text-left bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✅</span>
            <span>React + Vite frontend running</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✅</span>
            <span>Redux Toolkit store configured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✅</span>
            <span>Tailwind CSS configured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✅</span>
            <span>React Router ready</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">🔗</span>
            <span>Backend: http://localhost:5000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App