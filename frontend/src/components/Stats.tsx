interface StatsProps {
  stats: {
    total_hours: number
    total_sessions: number
    subjects: string[]
    average_per_session: number
  }
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="stats-view">
      <h2>Study Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.total_hours.toFixed(1)}</div>
          <div className="stat-label">Total Hours</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.total_sessions}</div>
          <div className="stat-label">Sessions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.average_per_session.toFixed(1)}</div>
          <div className="stat-label">Avg per Session</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.subjects.length}</div>
          <div className="stat-label">Subjects</div>
        </div>
      </div>

      {stats.subjects.length > 0 && (
        <div className="subjects">
          <h3>Subjects Studied</h3>
          <div className="subject-list">
            {stats.subjects.map((subject) => (
              <span key={subject} className="subject-tag">{subject}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
