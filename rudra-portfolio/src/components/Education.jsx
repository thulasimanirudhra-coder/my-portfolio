import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading eyebrow="Education" title="My academic journey" />
        <div className="timeline">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="timeline-item">
                <div className="timeline-card glass">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="place">{item.place}</p>
                  {item.score && <span className="score">{item.score}</span>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}