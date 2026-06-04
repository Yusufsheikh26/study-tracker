interface Session {
  id: number
  subject: string
  hours: number
  topic: string
  notes?: string
  created_at: string
}

interface SessionListProps {
  sessions: Session[]
}

export default function SessionList({ sessions }: SessionListProps) {
  return (
    <div className="sessions-list">
      <h2>Study Sessions</h2>
      {sessions.length === 0 ? (
        <p className="empty">No sessions logged yet. Start by adding one!</p>
      ) : (
        <div className="session-cards">
          {sessions.map((session) => (
            <div key={session.id} className="session-card">
              <div className="session-header">
                <h3>{session.subject}</h3>
                <span className="hours">{session.hours}h</span>
              </div>
              <p className="topic">📖 {session.topic}</p>
              {session.notes && <p className="notes">{session.notes}</p>}
              <p className="date">{new Date(session.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
