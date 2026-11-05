import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { technicalSkills, aiTools } from '../data/portfolioData'

function SkillCard({ skill, delay }) {
  const Icon = skill.icon
  return (
    <Reveal delay={delay}>
      <div className="skill-card glass">
        <div className="skill-icon">
          <Icon />
        </div>
        <h4>{skill.name}</h4>
        <span className={`badge badge-${skill.tone}`}>{skill.level}</span>
        <p>{skill.note}</p>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="An honest look at where I am today — strong in the basics and actively learning the rest."
        />

        <h3 className="skills-group-title">Technical Skills</h3>
        <div className="skills-grid">
          {technicalSkills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 60} />
          ))}
        </div>

        <h3 className="skills-group-title">AI Tools I Use</h3>
        <div className="skills-grid">
          {aiTools.map((tool, i) => (
            <SkillCard key={tool.name} skill={tool} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}