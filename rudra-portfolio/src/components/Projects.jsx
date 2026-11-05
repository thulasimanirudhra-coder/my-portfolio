import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of my frontend projects. Links marked “Soon” will be added once available."
        />
        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}