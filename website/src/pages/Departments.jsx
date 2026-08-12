const departments = [
  {
    num: '01',
    tag: 'Computer Science',
    desc: 'Maintains Website and web applications, including the Texas Cancer Compass app and this informational website. Also projected to work on easier software solutions for other departments, such as a database for legislative outreach and representative engagement.',
  },
  {
    num: '02',
    tag: 'Spatial Data Analysis',
    desc: 'Conducts spatial data analysis and visualization for the project, including mapping cancer incidence and mortality rates across Texas counties, and analyzing the relationship between cancer outcomes and social determinants of health and writing relevant reports and publications on their findings.',
  },
  {
    num: '03',
    tag: 'Legal Outreach',
    desc: 'Uses analysis reports and other data to inform legislative outreach and engagement, including writing policy briefs and other materials for legislators and their staff, and coordinating with the Texas Cancer Compass app team to provide relevant information to users.',
  },
  {
    num: '04',
    tag: 'Cancer Research',
    desc: 'Finds additional information and data to support the project, including identifying relevant research studies and publications, and finding additional details on the effects of benzene exposure and other environmental factors on surronding communities and populations. Also works with the Spatial Data Analysis team to provide additional context and information for their analyses.',
  },
]

export default function Departments() {
  return (
    <div className="page page--departments">
      <header className="page-header">
        <h1>How the Project Is Organized</h1>
      </header>


      <ul className="log-list">
        {departments.map((dept) => (
          <li className="log-entry" key={dept.num}>
            <span className="log-entry__num">{dept.num}</span>
            <div className="log-entry__body">
              <h3 className="placeholder">{dept.tag}</h3>
              <p className="placeholder">{dept.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
