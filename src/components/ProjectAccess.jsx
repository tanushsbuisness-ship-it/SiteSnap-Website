import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProjectAccess.css'

function normalizeProjectId(value) {
  return value.trim()
}

function isValidProjectId(value) {
  return /^[A-Za-z0-9_-]{6,128}$/.test(value)
}

export default function ProjectAccess() {
  const navigate = useNavigate()
  const [projectId, setProjectId] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const normalizedId = normalizeProjectId(projectId)

    if (!isValidProjectId(normalizedId)) {
      setError('Enter a valid project ID to continue.')
      return
    }

    setError('')
    navigate(`/projects/${normalizedId}`)
  }

  return (
    <section className="project-access" id="projects">
      <div className="project-access-inner">
        <div className="project-access-copy">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Open a shared project</h2>
          <p className="project-access-text">
            Enter a project ID to open the shared project tab. Only active shared
            projects should load here.
          </p>
        </div>

        <form className="project-access-card" onSubmit={handleSubmit}>
          <label className="project-access-label" htmlFor="project-id">
            Enter a project ID
          </label>
          <div className="project-access-row">
            <input
              id="project-id"
              className="project-access-input"
              type="text"
              value={projectId}
              onChange={(event) => setProjectId(event.target.value)}
              placeholder="Example: site_8gQ2kL9A"
              autoComplete="off"
              spellCheck="false"
            />
            <button className="project-access-button" type="submit">
              Open project
            </button>
          </div>
          {error ? <p className="project-access-error">{error}</p> : null}
          <p className="project-access-note">
            Access is limited to shared project records and blocked when a share is revoked or expired.
          </p>
        </form>
      </div>
    </section>
  )
}
