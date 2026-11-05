import { FaCertificate } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { certificates } from '../data/portfolioData'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Certificates"
          title="Courses & achievements"
          subtitle="Certificate images will be added soon."
        />
        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 100}>
              <div className="cert-card glass">
                <div className="cert-image">
                  {cert.file ? (
                    <img src={cert.file} alt={cert.title} loading="lazy" />
                  ) : (
                    <div>
                      <FaCertificate />
                      <span>Certificate image placeholder</span>
                    </div>
                  )}
                </div>
                <div className="cert-body">
                  <h3>{cert.title}</h3>
                  {cert.file ? (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      View Certificate
                    </a>
                  ) : (
                    <span className="btn btn-disabled btn-sm" title="Certificate coming soon">
                      View Certificate · Soon
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}