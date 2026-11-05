import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import useTyping from '../hooks/useTyping'
import ProfileImage from './ProfileImage'
import { profile, typingRoles } from '../data/portfolioData'

export default function Hero() {
  const typed = useTyping(typingRoles)

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>
            Hello, I'm <span className="gradient-text">Rudhra</span>
          </h1>
          <p className="hero-role" aria-label="Frontend Developer">
            <span className="gradient-text">{typed}</span>
            <span className="cursor" aria-hidden="true" />
          </p>
          <p className="hero-text">
            A Computer Science student who enjoys building responsive,
            user-friendly websites. I'm currently learning JavaScript and
            React.js and growing my skills one project at a time.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}