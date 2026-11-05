import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { navLinks, profile } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="logo">
              Rudhra<span>.</span>
            </a>
            <p>
              Frontend developer in the making, building responsive and
              user-friendly websites.
            </p>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              {navLinks.map(({ id, label }) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Location</h4>
            <p style={{ margin: 0 }}>{profile.location}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rudhra. All rights reserved.</span>
          <button className="to-top" onClick={scrollToTop}>
            <FaArrowUp /> Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}