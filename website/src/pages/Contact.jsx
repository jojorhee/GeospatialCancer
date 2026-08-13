export default function Contact() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Reach Out to Us</h1>
      </header>

      <section className="content-block">
        <h2>Reach The Team</h2>
        <dl className="contact-list">
          <div className="contact-list__row">
            <dt>Email</dt>
            <dd className="placeholder">[ contact email — add here ]</dd>
          </div>
          <div className="contact-list__row">
            <dt>Phone</dt>
            <dd className="placeholder">[ phone number — add here ]</dd>
          </div>
          <div className="contact-list__row">
            <dt>Location</dt>
            <dd className="placeholder">[ city / campus — add here ]</dd>
          </div>
          <div className="contact-list__row">
            <dt>Social</dt>
            <dd className="placeholder">[ Instagram / X / LinkedIn handles — add here ]</dd>
          </div>
        </dl>
      </section>

      <section className="volunteer">
        <div className="section-head section-head--tight">
          <div>
            <h2>Join the Investigation</h2>
            <p>
              We're a team of 30+ volunteers, and we're always looking for more help. If you're interested in joining the project, please fill out the form below and we'll be in touch.
            </p>
          </div>
        </div>
        <div className="form-frame">
          <iframe
            src="https://docs.google.com/forms/d/1YfLnM27lY3ATpBDFWyOTnUPcKPFSujKXQNuya5Q4U4w/viewform?embedded=true"
            title="Volunteer sign-up form"
            loading="lazy"
          >
            Loading form…
          </iframe>
        </div>
      </section>
    </div>
  )
}
