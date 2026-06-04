import { useState, useEffect } from 'react'
import axios from 'axios'
import SessionForm from './components/SessionForm'
import SessionList from './components/SessionList'
import Stats from './components/Stats'
import './App.css'

const API_URL = 'http://localhost:8000/api'

function App() {
  const [sessions, setSessions] = useState<any[]>([])
  const [stats, setStats] = useState<any>(null)
  const [activeTab, setActiveTab] = useState('sessions')

  useEffect(() => {
    fetchSessions()
    fetchStats()
  }, [])

  const fetchSessions = async () => {
    try {
      const response = await axios.get(`${API_URL}/sessions`)
      setSessions(response.data)
    } catch (error) {
      console.error('Failed to fetch sessions:', error)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/stats`)
      setStats(response.data)
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    }
  }

  const handleAddSession = async (newSession: any) => {
    try {
      await axios.post(`${API_URL}/sessions`, newSession)
      fetchSessions()
      fetchStats()
    } catch (error) {
      console.error('Failed to add session:', error)
    }
  }

  return (
    <div className="app">
      <header>
        <h1>📚 Study Tracker</h1>
      </header>

      <nav className="tabs">
        <button
          className={activeTab === 'sessions' ? 'active' : ''}
          onClick={() => setActiveTab('sessions')}
        >
          Sessions
        </button>
        <button
          className={activeTab === 'stats' ? 'active' : ''}
          onClick={() => setActiveTab('stats')}
        >
          Stats
        </button>
      </nav>

      <main>
        {activeTab === 'sessions' && (
          <div className="sessions-view">
            <SessionForm onAddSession={handleAddSession} />
            <SessionList sessions={sessions} />
          </div>
        )}

        {activeTab === 'stats' && stats && (
          <Stats stats={stats} />
        )}
      </main>
    </div>
  )
}

export default App
