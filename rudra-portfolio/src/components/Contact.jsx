import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

const initialValues = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Please enter a valid email address.'
  if (values.subject.trim().length < 3) errors.subject = 'Please enter a subject.'
  if (values.message.trim().length < 10)
    errors.message = 'Message should be at least 10 characters.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setSubmitted(Object.keys(found).length === 0)
  }

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    values.subject
  )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`

  const field = (name, label, type = 'text') => (
    <div className={`field ${errors[name] ? 'has-error' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={values[name]}
        onChange={handleChange}
        aria-invalid={Boolean(errors[name])}
      />
      {errors[name] && <p className="error-text">{errors[name]}</p>}
    </div>
  )

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's get in touch"
          subtitle="I'm open to learning opportunities, internships and entry-level roles."
        />

        <div className="contact-grid">
          <Reveal>
            <div className="contact-info glass">
              <h3>Contact Details</h3>
              <p>Feel free to reach out through any of these channels.</p>

              <a className="contact-item" href={`mailto:${profile.email}`}>
                <span className="ci"><FaEnvelope /></span>
                {profile.email}
              </a>
              <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer">
                <span className="ci"><FaGithub /></span>
                GitHub Profile
              </a>
              <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="ci"><FaLinkedin /></span>
                LinkedIn (add your link)
              </a>
              <div className="contact-item">
                <span className="ci"><FaMapMarkerAlt /></span>
                {profile.location}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                {field('name', 'Name')}
                {field('email', 'Email', 'email')}
              </div>
              {field('subject', 'Subject')}

              <div className={`field ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              {submitted && (
                <div className="form-note" role="status">
                  Your details look good, but this website is not connected to a
                  backend or email service yet, so nothing has been sent.{' '}
                  <a href={mailtoHref}>Open in your email app</a> to send this message.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}