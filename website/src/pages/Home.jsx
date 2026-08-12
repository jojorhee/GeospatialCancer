import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero__content">
          <h1 className="logo-text">Texas Geospatial Cancer Data Advocacy Project</h1>

        </div>


      </section>

      <section className="mission-section">
        <div className="section-head section-head--tight">
          <div>
            <h2>Our Mission</h2>
          </div>
        </div>

        <div className="content-block">
          <h2>Who We Are</h2>
          <p>
            We are a student-driven legislative advocacy and data analysis project focused on
            uncovering environmental carcinogen sources across Texas. Our work integrates
            computer programming, cancer statistics, political outreach, and environmental data
            analysis.
          </p>
        </div>

        <div className="content-block">
          <h2>What We Do</h2>
          <p>
            We investigate industrial sites that release carcinogens ,especially <b>benzene</b>,
            into surrounding communities. These emissions correlate with elevated cancer rates,
            including leukemia, in multiple Texas regions.
          </p>
        </div>

        <div className="content-block">
          <h2>Why This Matters</h2>
          <p>
            Communities often lack access to clear information about carcinogenic exposure. By
            combining technical research with civic engagement, we aim to push for stronger
            protections and regulatory action.
          </p>
        </div>

        <div className="content-block">
          <h2>Our Advocacy Role</h2>
          <p>
            As part of our mission, we research local, state, and federal representatives and
            communicate our findings to them. This includes reaching out to offices, sharing
            analytical reports, and finding stories of impacted communities to raise awareness about carcinogenic industrial activity.
          </p>
        </div>
      </section>

      {/* mission actions removed per request */}

      <section className="map-section">
        <div className="section-head">
          <div>
            <h2>Texas Cancer Compass</h2>
            <p>
              Our interactive map below provides county-level cancer statistics layered against flagged
              environmental sites, live and in progress.
            </p>
          </div>
          <a
            href="https://texascancer.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="section-head__link"
          >
            Open Full Map ↗
          </a>
        </div>
        <div className="map-frame">
          <iframe
            src="https://texascancer.netlify.app/"
            title="Texas Cancer Compass — cancer data explorer"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}