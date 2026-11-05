import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  const { title, description, tech, icon: Icon, gradient, image, live, github } = project
  const [imgOk, setImgOk] = useState(Boolean(image))

  return (
    <article className="project-card glass">
      <div className="project-visual">
        <div className="project-visual-inner" style={{ background: gradient }}>
          {imgOk ? (
            <img
              src={image}
              alt={`${title} screenshot`}
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <Icon className="project-icon" aria-hidden="true" />
          )}
        </div>
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="tech-list">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-actions">
          {live ? (
            <a href={live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              <FaExternalLinkAlt /> View Project
            </a>
          ) : (
            <span className="btn btn-disabled btn-sm" title="Live link coming soon (placeholder)">
              <FaExternalLinkAlt /> View Project · Soon
            </span>
          )}

          {github ? (
            <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              <FaGithub /> GitHub
            </a>
          ) : (
            <span className="btn btn-disabled btn-sm" title="GitHub link coming soon (placeholder)">
              <FaGithub /> GitHub · Soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}