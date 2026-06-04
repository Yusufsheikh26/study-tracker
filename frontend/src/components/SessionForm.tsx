import { useState } from 'react'

interface SessionFormProps {
  onAddSession: (session: { subject: string; hours: number; topic: string; notes: string }) => void
}

export default function SessionForm({ onAddSession }: SessionFormProps) {
  const [subject, setSubject] = useState('')
  const [hours, setHours] = useState('')
  const [topic, setTopic] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject || !hours || !topic) {
      alert('Please fill in all required fields')
      return
    }

    onAddSession({
      subject,
      hours: parseFloat(hours),
      topic,
      notes
    })

    setSubject('')
    setHours('')
    setTopic('')
    setNotes('')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Log Study Session</h2>

      <input
        type="text"
        placeholder="Subject (e.g., Maths, English)"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Hours studied"
        step="0.5"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Topic covered"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />

      <textarea
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={3}
      />

      <button type="submit">Save Session</button>
    </form>
  )
}
