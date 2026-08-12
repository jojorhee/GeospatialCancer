const officers = [
  { role: 'Project Lead', name: '[ Officer name ]',bio: '[ one-line bio — add here ]' },
  { role: 'Chief Operating Officer', name: '[ Officer name ]',bio: '[ one-line bio — add here ]' },
  { role: 'Chief Financial Officer', name: '[ Officer name ]',bio: '[ one-line bio — add here ]' },
  { role: 'Chief Technology Officer', name: '[ Officer name ]',bio: '[ one-line bio — add here ]' },
  { role: 'Chief Legal Officer', name: '[ Officer name ]',bio: '[ one-line bio — add here ]' },
  { role: 'Chief Data Officer', name: '[ Officer name ]',bio: '[ one-line bio — add here ]' },
  { role: 'Chief Data Officer', name: '[ Officer name ]',bio: '[ one-line bio — add here ]' },
]

export default function Officers() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Meet the Team</h1>
      </header>


      <div className="officer-grid">
        {officers.map((officer) => (
          <div className="officer-card" key={officer.role}>
            <div className="officer-card__photo" aria-hidden="true">
              <span>[ photo ]</span>
            </div>
            <span className="officer-card__role">{officer.role}</span>
            <h3 className="placeholder">{officer.name}</h3>
            <p className="placeholder">{officer.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
